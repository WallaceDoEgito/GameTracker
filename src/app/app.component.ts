import { Component, ComponentRef, importProvidersFrom, Inject, inject, viewChild, ViewContainerRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './src/Components/header/header.component';
import { NavComponent } from "./src/Components/nav/nav.component";
import { Game } from './Classes/Games';
import { ApiService } from './src/Services/api.service';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { GameComponent } from './src/Components/game/game.component';
import { AddGameDialogPopUpComponent } from "./src/Components/add-game-dialog-pop-up/add-game-dialog-pop-up.component";
import { ApiMockService } from './src/Services/api-mock.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, NavComponent, GameComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  conteinerRef = viewChild('popUpConteiner', {read:ViewContainerRef})
  title = 'GameTracker';
  private apiService = inject(ApiMockService);
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
    this.#popUpReference?.instance.addEvent.subscribe((game:Game) => this.GameList.push(game))
    this.#popUpReference?.instance.closeEvent.subscribe(() => this.conteinerRef()?.clear())
  }

}
