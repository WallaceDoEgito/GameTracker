import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-nav',
  imports: [FormsModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  @Output() inputDataEvent = new EventEmitter<string>()
  inputData!:string
  
  dataEmitter(){
    this.inputDataEvent.emit(this.inputData);
  }

  resetSearch(){
    this.inputData = ''
    this.dataEmitter()
  }
}
