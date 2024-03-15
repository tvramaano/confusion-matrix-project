import { NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-confusion-matrix-grid',
  standalone: true,
  imports: [NgFor],
  templateUrl: './confusion-matrix-grid.component.html',
  styleUrl: './confusion-matrix-grid.component.css'
})
export class ConfusionMatrixGridComponent {
 @Input() grid_label = "";

}
