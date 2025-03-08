import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {OutsideClickDirective} from '../../Directives/outside-click.directive'
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-add-game-dialog-pop-up',
  imports: [FormsModule, OutsideClickDirective, NgOptimizedImage ],
  templateUrl: './add-game-dialog-pop-up.component.html',
  styleUrl: './add-game-dialog-pop-up.component.css'
})
export class AddGameDialogPopUpComponent {
  gameName!:string;
  gameImageUrl!:string;
  hoursPlayed!:number;
  rating!:number;
  review!:string;

  @Output() closeEvent = new EventEmitter()
  

  CloseClickEvent(){
    this.closeEvent.emit()
  }

  AddClickEvent(){

  }

  SearchName(){
  }
}
