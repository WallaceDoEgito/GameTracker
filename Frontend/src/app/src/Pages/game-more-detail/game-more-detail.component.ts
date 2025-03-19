import { Component, inject, Input, OnInit } from '@angular/core';
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

@Component({
  selector: 'app-game-more-detail',
  imports: [MatIconModule, MatButtonModule, MatTooltip],
  templateUrl: './game-more-detail.component.html',
  styleUrl: './game-more-detail.component.css'
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
      this.GameSelected!.backgroundImageLink = result
    })
  }
  EditBanner(){
    const dialogEditRef = this.dialog.open(EditBannerComponent)
    dialogEditRef.afterClosed().subscribe((result)=>{
      if(!result) return
      this.GameSelected!.backgroundImageLink = result
    })
  }
}
