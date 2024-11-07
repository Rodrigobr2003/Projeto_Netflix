import { Component } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private router: Router) {}

  navigateHome() {
    this.router.navigate(['/home']);
  }
}
