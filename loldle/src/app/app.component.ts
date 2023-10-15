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
  guessedChampList = [];
  championInput = new FormControl('');
  filteredChamps: Observable<Champion[]>;
  allChamps = ChampionData;
  constructor() {
    this.filteredChamps = this.championInput.valueChanges.pipe(
      startWith(''),
      map((input) =>
        input
          ? this.allChamps.filter((champ) =>
              champ.name.toLowerCase().includes(input)
            )
          : this.allChamps.slice()
      )
    );
  }
}
