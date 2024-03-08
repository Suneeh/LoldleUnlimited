import { AsyncPipe, NgClass, NgFor, NgIf, NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterOutlet } from '@angular/router';
import { Observable, map, startWith } from 'rxjs';
import { Champion, ChampionData } from './champion-data';
import { ChampionGuessComponent } from './champion-guess/champion-guess.component';
import { ChampionService } from './champion.service';

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
    NgFor,
    NgClass,
    NgIf,
    AsyncPipe,
    NgOptimizedImage,
    ChampionGuessComponent,
  ],
})
export class AppComponent {
  guessedChampList: Champion[] = [];
  championInput = new FormControl('');
  filteredChamps: Observable<Champion[]>;
  allChamps = ChampionData;
  gameWon = false;
  constructor(private champService: ChampionService) {
    this.filteredChamps = this.championInput.valueChanges.pipe(
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
    );
  }

  guess(value: string) {
    const championGuessed = this.allChamps.find((champ) => champ.name === value);
    if (championGuessed) {
      this.guessedChampList.unshift(championGuessed);

      if (championGuessed.name == this.champService.getCorrectChampion.name) {
        this.gameWon = true;
        this.allChamps = [];
      }
      this.championInput.reset('');
    }
  }
}
