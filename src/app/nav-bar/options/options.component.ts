import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { faLanguage } from '@fortawesome/free-solid-svg-icons';
import { NavBarComponent } from '../nav-bar.component';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrl: './options.component.css',
})
export class OptionsComponent {
  faLanguage = faLanguage;

  constructor(private router: Router, private verifyOpts: NavBarComponent) {}

  async navigateHome() {
    await this.router.navigate(['/home']);

    this.verifyOpts.verifyOptions();
  }
}
