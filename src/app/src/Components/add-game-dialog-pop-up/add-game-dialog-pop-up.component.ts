import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-game-dialog-pop-up',
  imports: [FormsModule],
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
