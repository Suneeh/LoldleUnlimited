import { ChangeDetectionStrategy, Component, OnInit, input } from '@angular/core';
import { Champion } from '../champion-data';
import { statTypeEnum } from '../statTypeEnum';
import { NgClass } from '@angular/common';
import { ChampionService } from '../champion.service';

interface Classes {
  gender: string;
  releaseDate: string;
  rangeType: string;
  resource: string;
  positions: string;
  regions: string;
  species: string;
}

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-champion-guess',
  templateUrl: './champion-guess.component.html',
  styleUrls: ['./champion-guess.component.scss'],
  standalone: true,
  imports: [NgClass],
})
export class ChampionGuessComponent implements OnInit {
  public champ = input.required<Champion>();
  public classes: Classes | undefined;

  constructor(private champService: ChampionService) {}
  ngOnInit(): void {
    const correctCampion = this.champService.getCorrectChampion();
    this.classes = {
      gender: this.getClassFromComparison(this.champ().gender, correctCampion.gender, statTypeEnum.string),
      positions: this.getClassFromComparison(this.champ().positions, correctCampion.positions, statTypeEnum.array),
      regions: this.getClassFromComparison(this.champ().regions, correctCampion.regions, statTypeEnum.array),
      species: this.getClassFromComparison(this.champ().species, correctCampion.species, statTypeEnum.array),
      releaseDate: this.getClassFromComparison(this.champ().releaseDate, correctCampion.releaseDate, statTypeEnum.number),
      resource: this.getClassFromComparison(this.champ().resource, correctCampion.resource, statTypeEnum.string),
      rangeType: this.getClassFromComparison(this.champ().rangeTypes, correctCampion.rangeTypes, statTypeEnum.array),
    };
  }

  getClassFromComparison(guessedStats: string | string[], correctStats: string | string[], statType: statTypeEnum): string {
    switch (statType) {
      case statTypeEnum.array:
        if (Array.isArray(guessedStats) && Array.isArray(correctStats)) {
          let correctStatAmount = 0;
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
          const guessedNumber = this.getYearFromString(guessedStats as string);
          const correctNumber = this.getYearFromString(correctStats as string);
          if (guessedNumber === correctNumber) return 'correct';
          if (guessedNumber > correctNumber) return 'lower';
          if (guessedNumber < correctNumber) return 'higher';
        }
    }
    return 'wrong';
  }

  getYearFromString(date: string): number {
    return new Date(date).getFullYear();
  }
}
