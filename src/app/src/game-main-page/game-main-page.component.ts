import { Component, ComponentRef, inject, viewChild, ViewContainerRef } from '@angular/core';
import { Game } from '../../Classes/Games';
import { AddGameDialogPopUpComponent } from '../Components/add-game-dialog-pop-up/add-game-dialog-pop-up.component';
import { ApiService } from '../Services/api.service';
import { HeaderComponent } from "../Components/header/header.component";
import { NavComponent } from "../Components/nav/nav.component";
import { GameComponent } from "../Components/game/game.component";

@Component({
  selector: 'app-game-main-page',
  imports: [HeaderComponent, NavComponent, GameComponent],
  templateUrl: './game-main-page.component.html',
  styleUrl: './game-main-page.component.css'
})
export class GameMainPageComponent {
  conteinerRef = viewChild('popUpConteiner', {read:ViewContainerRef})
  title = 'GameTracker';
  private apiService = inject(ApiService);
  GameList:Game[] = this.apiService.Get();
  filter = ''
  #popUpReference?:ComponentRef<AddGameDialogPopUpComponent>

  setFilter(data:string){
    this.filter = data;
  }

  CreatePopUp(){
    this.conteinerRef()?.clear()
    this.#popUpReference = this.conteinerRef()?.createComponent(AddGameDialogPopUpComponent)
    this.#popUpReference?.setInput("gameList", this.GameList)
    this.#popUpReference?.instance.addEvent.subscribe((game:Game) => { this.apiService.Post(game)})
    this.#popUpReference?.instance.closeEvent.subscribe(() => this.conteinerRef()?.clear())
  }

  DeleteGame(gameToBeDeleted:Game){
    this.apiService.Delete(gameToBeDeleted)
  }




}
