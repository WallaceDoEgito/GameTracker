import { Component, EventEmitter, inject, Input, OnInit, Output} from '@angular/core';
import { Game } from '../../../Classes/Games';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDialog} from '@angular/material/dialog';
import { ConfirmationDialogComponent } from '../Dialogs/confirmation-dialog/confirmation-dialog.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ApiService } from '../../Services/api.service';
import { SessionTime } from '../../../Classes/SessionTime';

@Component({
  selector: 'app-game',
  imports: [MatMenuModule, MatButtonModule, MatIconModule, RouterLink, RouterOutlet],
  templateUrl: './game.component.html',
  styleUrl: './game.component.css'
})
export class GameComponent implements OnInit{
  @Input() gameInput!:Game
  @Output() deleteGameEvent = new EventEmitter<Game>()
  dialog = inject(MatDialog)
  apiCall = inject(ApiService)
  sessions! : SessionTime[]
  semanalSessions!:SessionTime[]

  totalTime = 0
  semanalTime = 0

  async ngOnInit() {
      this.sessions = await this.apiCall.getSession(this.gameInput.gameId)
      this.CalcTotalTime();
      this.semanalSessions = await this.apiCall.getSessionsInterval(this.gameInput.gameId);
      this.CalcSemanalTime();
  }

  private CalcTotalTime() : void{
    let totalSum = this.gameInput!.hoursPlayed;
    for(let g of this.sessions!){
      totalSum += Number.parseInt(g.sessionHours.slice(0,2))
      totalSum += Number.parseFloat(g.sessionHours.slice(3,5)) / 60
    }
    this.totalTime = totalSum;
  }

  private CalcSemanalTime():void {
    let sum = 0;
    for(let g of this.semanalSessions){
      sum += Number.parseInt(g.sessionHours.slice(0,2))
      sum += Number.parseFloat(g.sessionHours.slice(3,5)) / 60
    }
    this.semanalTime = sum;
  }
  

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
