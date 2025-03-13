import { Component, Input, input } from '@angular/core';
import { Game } from '../../../Classes/Games';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-game',
  imports: [MatMenuModule, MatButtonModule, MatIconModule],
  templateUrl: './game.component.html',
  styleUrl: './game.component.css'
})
export class GameComponent {
  @Input() gameInput!:Game

  OpenMenu(){

  }

}
