import { Component, EventEmitter, inject, Input, Output} from '@angular/core';
import { Game } from '../../../Classes/Games';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDialog} from '@angular/material/dialog';
import { ConfirmationDialogComponent } from '../Dialogs/confirmation-dialog/confirmation-dialog.component';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-game',
  imports: [MatMenuModule, MatButtonModule, MatIconModule, RouterLink, RouterOutlet],
  templateUrl: './game.component.html',
  styleUrl: './game.component.css'
})
export class GameComponent {
  @Input() gameInput!:Game
  @Output() deleteGameEvent = new EventEmitter<Game>()
  dialog = inject(MatDialog)

  OpenDialogConfirmation(){
    const dialogRef = this.dialog.open(ConfirmationDialogComponent);
    dialogRef.afterClosed().subscribe((result)=>{
      if(result === undefined || result === false) return;
      this.DeleteGame()
    })
  }

  DeleteGame(){
    this.deleteGameEvent.emit(this.gameInput)
  }

}
