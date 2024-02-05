import { Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgFor, AsyncPipe, NgIf, NgClass } from '@angular/common';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Observable, map, startWith } from 'rxjs';
import { Champion, ChampionData } from './champion-data';
import { RouterOutlet } from '@angular/router';
import { statTypeEnum } from './statTypeEnum';

@Component({
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
    ReactiveFormsModule,
    MatCardModule,
    NgFor,
    NgClass,
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
  correctCampion: Champion | null;
  constructor() {
    this.correctCampion = this.allChamps[Math.floor(Math.random() * this.allChamps.length)];
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
    let championGuessed = this.allChamps.find((champ) => champ.name === value);
    if (championGuessed) {
      this.guessedChampList.push(championGuessed);

      if (championGuessed?.name == this.correctCampion?.name) {
        this.gameWon = true;
        this.allChamps = [];
      }
      this.championInput.reset('');
    }
  }

  getClassDependingOnAmountEqualArrayElements(
    guessedStats: string | string[],
    correctStats: string | string[],
    statType: statTypeEnum
  ): string {
    switch (statType) {
      case statTypeEnum.array:
        let correctStatAmount = 0;
        if (Array.isArray(guessedStats) && Array.isArray(correctStats)) {
          correctStatAmount = guessedStats.filter((stat) => correctStats.includes(stat)).length;
          if (correctStatAmount === correctStats.length && correctStatAmount === guessedStats.length) {
            return 'correct';
          }
          if (correctStatAmount > 0) {
            return 'partial';
          }
          return 'wrong';
        }
        break;
      case statTypeEnum.string:
        if (guessedStats === correctStats) {
          return 'correct';
        }
        return 'wrong';
      case statTypeEnum.number:
        if (typeof guessedStats === 'string' && typeof correctStats === 'string') {
          let guessedNumber = this.getYearFromString(guessedStats as string);
          let correctNumber = this.getYearFromString(correctStats as string);
          if (guessedNumber === correctNumber) return 'correct';
          if (guessedNumber > correctNumber) return 'higher';
          if (guessedNumber < correctNumber) return 'lower';
        }
    }
    return 'wrong';
  }

  getYearFromString(date: string): number {
    return new Date(date).getFullYear();
  }
}
