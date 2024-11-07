import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { faLanguage } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrl: './options.component.css',
})
export class OptionsComponent {
  faLanguage = faLanguage;

  constructor(private router: Router) {}

  navigateHome() {
    this.router.navigate(['/home']);
  }
}
