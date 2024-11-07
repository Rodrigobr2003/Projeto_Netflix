import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css',
})
export class NavBarComponent implements OnInit {
  actvRoute: Router;
  showOptions: boolean = false;
  showProfileOptions: boolean = false;

  constructor() {
    this.actvRoute = inject(Router);
  }

  ngOnInit(): void {
    if (this.actvRoute.url.includes('/home')) {
      this.showOptions = false;
      this.showProfileOptions = true;
    } else {
      this.showOptions = true;
      this.showProfileOptions = false;
    }
  }
}
