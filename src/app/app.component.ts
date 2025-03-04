import { Component, importProvidersFrom, Inject, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './src/Components/header/header.component';
import { NavComponent } from "./src/Components/nav/nav.component";
import { Game } from './Classes/Games';
import { ApiService } from './src/Services/api.service';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { GameComponent } from './src/Components/game/game.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, NavComponent, GameComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'GameTracker';
  private apiService = inject(ApiService);
  GameList:Game[] = this.apiService.Get();

}
