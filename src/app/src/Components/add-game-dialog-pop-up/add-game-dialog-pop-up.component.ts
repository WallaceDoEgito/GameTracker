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
  gameImageUrl:string = " ";
  hoursPlayed!:number;
  rating!:number;
  review!:string;

  nameError:boolean = false
  hoursError:boolean = false
  ratingError:boolean = false

  nameErrorMensage!:string
  hoursErrorMensage!:string
  ratingErrorMensage!:string


  @Output() closeEvent = new EventEmitter()
  

  CloseClickEvent(){
    this.closeEvent.emit()
  }

  AddClickEvent(){
    if(!this.CheckInputsForErrors())return
    console.log("deu bom")
  }

  SearchName(){
  }

  CheckInputsForErrors(): boolean{
    this.resetErrors();
    if(this.gameName == undefined||this.gameName.trim() === ""){
      this.nameErrorMensage += "O nome não pode ser vazio"
      this.nameError = true
    }
    if(this.hoursPlayed < 0){
      this.hoursErrorMensage += "Esse campo necessita de um numero não negativo"
      this.hoursError = true
    }
    if(this.rating != undefined && (this.rating < 1 || this.rating > 5 )){
      this.ratingErrorMensage += "Digite um valor entre 1 e 5 caso quiser avaliar"
      this.ratingError = true
    }

    return !(this.nameError || this.hoursError|| this.ratingError)
  }

  resetErrors(){
    this.nameErrorMensage = ""
    this.hoursErrorMensage = ""
    this.ratingErrorMensage = ""
    this.nameError = false
    this.hoursError = false
    this.ratingError = false
  }
}
