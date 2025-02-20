import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './src/Components/header/header.component';
import { NavComponent } from "./src/Components/nav/nav.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, NavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'GameTracker';
}
