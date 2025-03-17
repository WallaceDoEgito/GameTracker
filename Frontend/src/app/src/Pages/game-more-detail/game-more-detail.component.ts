import { Component, inject, Input, OnInit } from '@angular/core';
import { ApiService } from '../../Services/api.service';
import { Game } from '../../../Classes/Games';
import { Router } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-game-more-detail',
  imports: [MatIconModule, MatButtonModule],
  templateUrl: './game-more-detail.component.html',
  styleUrl: './game-more-detail.component.css'
})
export class GameMoreDetailComponent implements OnInit {
  @Input() id!:number
  private ApiCalls = inject(ApiService)
  private router = inject(Router)
  public GameSelected?:Game
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
}
