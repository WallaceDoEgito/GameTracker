import { Component, inject, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { ApiService } from '../../Services/api.service';
import { Game } from '../../../Classes/Games';
import { Router } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltip} from '@angular/material/tooltip';
import { MatDialog } from '@angular/material/dialog';
import { EditBannerComponent } from '../../Components/Dialogs/edit-banner/edit-banner.component';
import { AddBannerComponent } from '../../Components/Dialogs/add-banner/add-banner.component';
import { DialogRef } from '@angular/cdk/dialog';
import { AddGameDialogPopUpComponent } from '../../Components/Dialogs/add-game-dialog-pop-up/add-game-dialog-pop-up.component';
import { EditGameComponent } from '../../Components/Dialogs/edit-game/edit-game.component';

@Component({
  selector: 'app-game-more-detail',
  imports: [MatIconModule, MatButtonModule, MatTooltip],
  templateUrl: './game-more-detail.component.html',
  styleUrl: './game-more-detail.component.css',
  encapsulation: ViewEncapsulation.None
})
export class GameMoreDetailComponent implements OnInit {
  @Input() id!:number
  private ApiCalls = inject(ApiService)
  private router = inject(Router)
  public GameSelected?:Game
  readonly dialog = inject(MatDialog)

  ngOnInit(){
    let gamelist:Game[] = this.ApiCalls.getList()
    this.GameSelected = this.FindGameById(gamelist, this.id)
    if(this.GameSelected == undefined) this.router.navigate([''])
  }

  private FindGameById(list:Game[], id:number)
  {
    for(let game of list){
      if(game.gameId == id) return game
    }
    return undefined
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
}
