import { AsyncPipe, NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCardModule } from '@angular/material/card';
import { MatDialog } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterOutlet } from '@angular/router';
import { map, startWith } from 'rxjs';
import { Champion, ChampionData } from './champion-data';
import { ChampionGuessComponent } from './champion-guess/champion-guess.component';
import { ChampionService } from './champion.service';
import { GameWonDialog } from './game-won-dialog/game-won.dialog';
import { MatIconModule } from '@angular/material/icon';
import { HelpDialog } from './help-dialog/help.dialog';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [
    RouterOutlet,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    MatDividerModule,
    ReactiveFormsModule,
    MatCardModule,
    AsyncPipe,
    NgOptimizedImage,
    ChampionGuessComponent,
    MatIconModule,
  ],
})
export class AppComponent {
  private champService = inject(ChampionService);
  private dialog = inject(MatDialog);
  guessedChampList: Champion[] = [];
  championInput = new FormControl('');
  allChamps = ChampionData;
  gameWon = false;
  $selectChamps = toSignal(
    this.championInput.valueChanges.pipe(
      startWith(''),
      map((input) =>
        input
          ? this.allChamps
              .filter((champ) => champ.name.toLowerCase().includes(input.toLocaleLowerCase()))
              .filter(
                (champ) =>
                  !this.guessedChampList.some((guess) => {
                    return guess.name === champ.name;
                  })
              )
          : this.allChamps.slice()
      ),
      map((champions) => champions.filter((champ) => !this.guessedChampList.some((guess) => guess.name === champ.name)))
    ),
    { initialValue: [] }
  );

  guess(value: string) {
    const championGuessed = this.allChamps.find((champ) => champ.name === value);
    if (championGuessed) {
      this.guessedChampList.unshift(championGuessed);
      if (championGuessed.name == this.champService.getCorrectChampion().name) {
        this.gameWon = true;
        const dialogRef = this.dialog.open(GameWonDialog, { data: { name: this.champService.getCorrectChampion().name } });
        dialogRef.afterClosed().subscribe((result) => {
          if (result !== undefined) {
            this.resetGame();
          } else {
            this.allChamps = [];
          }
        });
      }
      this.championInput.setValue('');
    }
  }

  resetGame() {
    this.guessedChampList = [];
    this.gameWon = false;
    this.championInput.setValue('');
    this.champService.resetCorrectChampion();
  }

  openHelpDialog() {
    this.dialog.open(HelpDialog);
  }
}
