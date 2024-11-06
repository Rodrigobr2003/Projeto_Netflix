import { Component } from '@angular/core';
import {
  faAngleLeft,
  faAngleRight,
  faPlay,
  faPlus,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrl: './index.component.css',
})
export class IndexComponent {
  arrowLeft = faAngleLeft;
  arrowRight = faAngleRight;
  playBtn = faPlay;
  plus = faPlus;
}
