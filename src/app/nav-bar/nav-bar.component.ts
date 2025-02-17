import {
  AfterViewInit,
  Component,
  HostListener,
  inject,
  OnChanges,
  OnInit,
} from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { on } from 'node:events';
import { filter } from 'rxjs';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css',
})
export class NavBarComponent implements OnInit {
  actvRoute: Router;
  appNavBar: any;
  showOptions: boolean = false;
  showProfileOptions: boolean = false;

  constructor() {
    this.actvRoute = inject(Router);
  }

  ngOnInit(): void {
    if (typeof document !== 'undefined') {
      this.appNavBar = document.querySelector('.nav-bar');

      this.verifyOptions();

      this.actvRoute.events
        .pipe(filter((event) => event instanceof NavigationEnd))
        .subscribe(() => {
          this.verifyOptions();
          this.verifyNavBar();
        });
    }
  }

  verifyOptions() {
    if (this.actvRoute.url.includes('/home')) {
      this.showOptions = false;
      this.showProfileOptions = true;
    } else {
      this.showOptions = true;
      this.showProfileOptions = false;
    }
  }

  verifyNavBar() {
    if (this.actvRoute.url.includes('/home')) {
      this.appNavBar.style.position = 'fixed';
    } else {
      this.appNavBar.style.position = 'relative';
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (this.actvRoute.url.includes('/home')) {
      const navbar = document.getElementById('navbar');

      if (window.scrollY === 0) {
        navbar.style.background = 'none';
      } else {
        navbar.style.background =
          'linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0))';
      }
    } else {
      return;
    }
  }
}
