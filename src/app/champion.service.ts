import { Injectable } from '@angular/core';
import { Champion, ChampionData } from './champion-data';

@Injectable({
  providedIn: 'root',
})
export class ChampionService {
  private allChamps = ChampionData;
  private correctCampion: Champion;

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
}
