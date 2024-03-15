import { Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { NgFor } from '@angular/common';
import { ConfusionMatrixCompleteComponent } from './confusion-matrix-complete/confusion-matrix-complete.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeaderComponent,ConfusionMatrixCompleteComponent,NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'confusion-matrix-project';
  
}
