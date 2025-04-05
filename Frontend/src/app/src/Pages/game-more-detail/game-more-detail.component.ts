import { Component, inject, Input, OnInit, ViewEncapsulation, afterRender } from '@angular/core';
import { ApiService } from '../../Services/api.service';
import { Game } from '../../../Classes/Games';
import { ActivatedRoute, Router } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltip} from '@angular/material/tooltip';
import { MatDialog } from '@angular/material/dialog';
import { EditBannerComponent } from '../../Components/Dialogs/edit-banner/edit-banner.component';
import { AddBannerComponent } from '../../Components/Dialogs/add-banner/add-banner.component';
import { DialogRef } from '@angular/cdk/dialog';
import { AddGameDialogPopUpComponent } from '../../Components/Dialogs/add-game-dialog-pop-up/add-game-dialog-pop-up.component';
import { EditGameComponent } from '../../Components/Dialogs/edit-game/edit-game.component';
import { SessionTime } from '../../../Classes/SessionTime';
import { firstValueFrom, lastValueFrom } from 'rxjs';
import { AddSessionComponent } from '../../Components/Dialogs/add-session/add-session.component';

@Component({
  selector: 'app-game-more-detail',
  imports: [MatIconModule, MatButtonModule, MatTooltip],
  templateUrl: './game-more-detail.component.html',
  styleUrl: './game-more-detail.component.css',
  encapsulation: ViewEncapsulation.None
})
export class GameMoreDetailComponent implements OnInit {
  id!:number
  private ApiCalls = inject(ApiService)
  private router = inject(Router)
  private activeRoutes = inject(ActivatedRoute)
  public GameSelected?:Game
  readonly dialog = inject(MatDialog)
  public GameSessions? : SessionTime[]
  public TotalHoursPlayed:number = 0;
  private editMode? : string;
  private addTimeMode?:string

    async ngOnInit(){
    this.id = Number.parseInt(this.activeRoutes.snapshot.paramMap.get('id')!) ?? -1;
    let gamelist:Game[] = this.ApiCalls.getList()
    this.GameSelected = this.FindGameById(gamelist, this.id)
    this.GameSessions = await this.ApiCalls.getSession(this.id)
    this.activeRoutes.queryParams.subscribe(params=>{
      this.editMode = params['editMode']
      this.addTimeMode = params['addTimeMode']
    })
    if(this.editMode == "true") this.EditGame();
    else if(this.addTimeMode == "true") this.AddSession();
    if(this.GameSelected == undefined) this.BackToHomePage();
    this.CalcTotalTime();
  }

  private FindGameById(list:Game[], id:number)
  {
    for(let game of list){
      if(game.gameId == id) return game
    }
    return undefined
  }

  private CalcTotalTime() : void{
    let totalSum = this.GameSelected!.hoursPlayed;
    for(let g of this.GameSessions!){
      console.log(g);
      totalSum += Number.parseInt(g.sessionHours.slice(0,2))
      totalSum += Number.parseFloat(g.sessionHours.slice(3,5)) / 60
    }
    this.TotalHoursPlayed = totalSum;
  }

  public BackToHomePage(){
    this.router.navigate([''])
  }

  AddBanner(){
    const dialogAddRef = this.dialog.open(AddBannerComponent)
    dialogAddRef.afterClosed().subscribe(result => {
      if(!result) return;
      this.GameSelected!.backgroundCoverUrl = result
      this.ApiCalls.Put(this.GameSelected!)
    })
  }
  EditBanner(){
    const dialogEditRef = this.dialog.open(EditBannerComponent)
    dialogEditRef.afterClosed().subscribe((result)=>{
      if(!result) return
      this.GameSelected!.backgroundCoverUrl = result
      this.ApiCalls.Put(this.GameSelected!)
    })
  }
  
  EditGame(){
    const dialogEditRef = this.dialog.open(EditGameComponent, {data: {game: this.GameSelected}, panelClass: 'dialogEdit'});
    dialogEditRef.afterClosed().subscribe(result => {
      if(!result) return;
      this.GameSelected!.gameName = result.newName;
      this.GameSelected!.gameImageUrl = result.newUrl;
      this.GameSelected!.review = result.newReview;
      this.ApiCalls.Put(this.GameSelected!);
    })
  }

  AddSession(){
    const dialogRef = this.dialog.open(AddSessionComponent)
    dialogRef.afterClosed().subscribe(result => {
      if(result.date == undefined || result.time == undefined) return;
      let session = new SessionTime(result.date, result.time)
      this.GameSessions?.push(session)
      this.CalcTotalTime();
      this.ApiCalls.postSession(this.GameSelected!.gameId, session)
    })
  }
}
