import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { ChampionGuessComponent } from '../champion-guess/champion-guess.component';
import { ChampionService } from '../champion.service';

@Component({
  selector: 'app-help-dialog',
  templateUrl: './help.dialog.html',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './help.dialog.scss',
  imports: [
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    MatIconModule,
    MatDividerModule,
    ChampionGuessComponent,
  ],
})
export class HelpDialog {
  public champService = inject(ChampionService);
  public date = new Date().getFullYear();
}