import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {OutsideClickDirective} from '../../../Directives/outside-click.directive'
import { NgOptimizedImage } from '@angular/common';
import { Game } from '../../../../Classes/Games';

@Component({
  selector: 'app-add-game-dialog-pop-up',
  imports: [FormsModule, OutsideClickDirective, NgOptimizedImage ],
  templateUrl: './add-game-dialog-pop-up.component.html',
  styleUrl: './add-game-dialog-pop-up.component.css'
})
export class AddGameDialogPopUpComponent {
  gameName!:string;
  gameImageUrl:string = "";
  hoursPlayed!:number;
  rating!:number;
  review:string = "";

  nameError:boolean = false
  hoursError:boolean = false
  ratingError:boolean = false

  nameErrorMensage!:string
  hoursErrorMensage!:string
  ratingErrorMensage!:string

  sendingData:boolean =false;


  @Output() closeEvent = new EventEmitter()
  @Output() addEvent = new EventEmitter<Game>();
  @Input() gameList! :Game[];

  CloseClickEvent(){
    this.closeEvent.emit()
  }

  AddClickEvent(){
    if(!this.CheckInputsForErrors())return
    if(this.hoursPlayed == undefined) this.hoursPlayed = 0;
    if(this.rating == undefined) this.rating = 0;
    let newGame:Game = new Game(0,this.gameName,this.gameImageUrl,this.hoursPlayed, this.review, this.rating)
    this.addEvent.emit(newGame)
    this.sendingData = false;
    this.closeEvent.emit()
  }

  SearchName(){
  }

  CheckInputsForErrors(): boolean{
    this.resetErrors();
    this.gameName = this.gameName.trim();
    if(this.gameName == undefined||this.gameName === ""){
      this.nameErrorMensage += "O nome não pode ser vazio "
      this.nameError = true
    }
    if(this.gameName.length >= 20){
      this.nameErrorMensage += "Nome muito grande "
      this.nameError = true
    }
    if(this.CheckIfExists(this.gameName)){
      this.nameErrorMensage += "Esse jogo ja foi adicionado "
      this.nameError = true
    }
    if(this.hoursPlayed < 0){
      this.hoursErrorMensage += "Esse campo necessita de um numero não negativo"
      this.hoursError = true
    }
    if((this.rating != undefined && this.rating != 0) && (this.rating < 1 || this.rating > 5 )){
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
  CheckIfExists(gameName:string) :boolean{
    for(let games of this.gameList){
      if(games.gameName.toLocaleLowerCase() === gameName.toLocaleLowerCase()) return true
    }
    return false;
  }
  ResetClickEvent(){
    this.gameName = ""
    this.gameImageUrl = "";
    this.hoursPlayed = 0;
    this.rating = 0
    this.review = "";
    this.resetErrors();
  }
}
