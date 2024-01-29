import { Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgFor, AsyncPipe, NgIf } from '@angular/common';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Observable, map, startWith } from 'rxjs';
import { Champion, ChampionData } from './champion-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatCardModule,
    NgFor,
    NgIf,
    AsyncPipe,
  ],
})
export class AppComponent {
  guessedChampList: Champion[] = [];
  championInput = new FormControl('');
  filteredChamps: Observable<Champion[]>;
  allChamps = ChampionData;
  // TODO - fetch correct champ and show the guessed champs with the hints correct / wrong stuff
  correctCampion: Champion | null;
  constructor() {
    this.correctCampion = this.allChamps[Math.floor(Math.random() * this.allChamps.length)];
    this.filteredChamps = this.championInput.valueChanges.pipe(
      startWith(''),
      map((input) =>
        input
          ? this.allChamps
              .filter((champ) => champ.name.toLowerCase().includes(input))
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
    let champtionGuessed = this.allChamps.find((champ) => champ.name === value);
    if (champtionGuessed) {
      this.guessedChampList.push(champtionGuessed);
    }
    this.championInput.reset('');
  }
}
