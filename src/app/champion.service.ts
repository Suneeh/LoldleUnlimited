import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Champion, ChampionData } from './champion-data';

@Injectable({
  providedIn: 'root',
})
export class ChampionService {
  private http = inject(HttpClient);
  private allChamps = ChampionData;
  private correctCampion: Champion;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private correctChampionJson: any;

  constructor() {
    this.correctCampion = this.allChamps[Math.floor(Math.random() * this.allChamps.length)];
  }

  resetCorrectChampion() {
    this.correctCampion = this.allChamps[Math.floor(Math.random() * this.allChamps.length)];
  }

  getAllChamps(): Champion[] {
    return this.allChamps;
  }

  getCorrectChampion(): Champion {
    return this.correctCampion;
  }

  getChampionByName(name: string): Champion {
    return this.allChamps.find((c) => c.name == name) || this.correctCampion;
  }

  getPassiveIconUrl(): Observable<string> {
    const result = this.http
      .get(`https://ddragon.leagueoflegends.com/cdn/14.16.1/data/en_US/champion/${this.correctCampion.id}.json`, {
        headers: { Accept: 'application/json' },
      })
      .pipe(
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        map((obj: any) => {
          this.correctChampionJson = obj;
          return `https://ddragon.leagueoflegends.com/cdn/14.16.1/img/passive/${
            obj['data'][this.correctCampion.id]['passive']['image']['full']
          }`;
        })
      );
    return result;
  }

  getPassiveName(): string {
    return this.correctChampionJson['data'][this.correctCampion.id]['passive']['name'];
  }

  getSplashArtUrl(): string {
    return `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${this.correctCampion.id}_0.jpg`;
  }
}
