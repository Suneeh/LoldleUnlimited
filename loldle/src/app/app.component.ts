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
  gameWon = false;
  // TODO - fetch correct champ and show the guessed champs with the hints correct / wrong stuff
  correctCampion: Champion | null;
  constructor() {
    this.correctCampion = this.allChamps[Math.floor(Math.random() * this.allChamps.length)];
    console.log(this.correctCampion.name);
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
    let champtionGuessed = this.allChamps.find((champ) => champ.name === value);
    if (champtionGuessed) {
      this.guessedChampList.push(champtionGuessed);

      if (champtionGuessed?.name == this.correctCampion?.name) {
        this.gameWon = true;
        this.allChamps = [];
      }
      this.championInput.reset('');
    }
  }

  getAmountEqualArrayElements(guessedStats: string | string[], correctStats: string | string[]): number {
    if (Array.isArray(guessedStats) && Array.isArray(correctStats)) {
      return guessedStats.filter((stat) => correctStats.includes(stat)).length;
    } else {
      return guessedStats === correctStats ? 1 : 0;
    }
  }
  getYearFromString(date: string): number {
    return new Date(date).getFullYear();
  }
}
