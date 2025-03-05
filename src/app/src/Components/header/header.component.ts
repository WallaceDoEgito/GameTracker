import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Output() addClickEvent = new EventEmitter();
  OnAddButtonClick(event:any){
    event.stopPropagation();
    this.addClickEvent.emit();
  }
}
