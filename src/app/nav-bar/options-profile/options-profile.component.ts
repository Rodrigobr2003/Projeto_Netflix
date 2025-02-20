import { Component } from '@angular/core';
@Component({
  selector: 'app-options-profile',
  templateUrl: './options-profile.component.html',
  styleUrl: './options-profile.component.css',
})
export class OptionsProfileComponent {
  isMobileMenuOpen = false;

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }
}
