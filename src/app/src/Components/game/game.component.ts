import { Component, EventEmitter, inject, Input, Output} from '@angular/core';
import { Game } from '../../../Classes/Games';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDialog} from '@angular/material/dialog';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-game',
  imports: [MatMenuModule, MatButtonModule, MatIconModule],
  templateUrl: './game.component.html',
  styleUrl: './game.component.css'
})
export class GameComponent {
  @Input() gameInput!:Game
  @Output() deleteGameEvent = new EventEmitter<Game>()
  dialog = inject(MatDialog)

  OpenDialogConfirmation(){
    const dialogRef = this.dialog.open(ConfirmationDialogComponent);
  }
}