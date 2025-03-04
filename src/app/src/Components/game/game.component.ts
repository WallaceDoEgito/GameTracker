import { Component, Input, input } from '@angular/core';
import { Game } from '../../../Classes/Games';

@Component({
  selector: 'app-game',
  imports: [],
  templateUrl: './game.component.html',
  styleUrl: './game.component.css'
})
export class GameComponent {
  @Input() gameInput!:Game

}
