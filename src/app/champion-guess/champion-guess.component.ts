import { ChangeDetectionStrategy, Component, OnInit, input } from '@angular/core';
import { Champion } from '../champion-data';
import { statTypeEnum } from '../statTypeEnum';
import { NgClass } from '@angular/common';
import { ChampionService } from '../champion.service';

interface Classes {
  releaseDate: string;
  rangeType: string;
  resource: string;
  roles: string;
  lanes: string;
  region: string;
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
      releaseDate: this.getClassFromComparison(this.champ().releaseDate, correctCampion.releaseDate, statTypeEnum.number),
      rangeType: this.getClassFromComparison(this.champ().rangeType, correctCampion.rangeType, statTypeEnum.string),
      resource: this.getClassFromComparison(this.champ().resource, correctCampion.resource, statTypeEnum.string),
      roles: this.getClassFromComparison(this.champ().roles, correctCampion.roles, statTypeEnum.array),
      lanes: this.getClassFromComparison(this.champ().lanes, correctCampion.lanes, statTypeEnum.array),
      region: this.getClassFromComparison(this.champ().region, correctCampion.region, statTypeEnum.array),
      species: this.getClassFromComparison(this.champ().species, correctCampion.species, statTypeEnum.array),
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
