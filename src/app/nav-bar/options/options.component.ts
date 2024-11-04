import { Component } from '@angular/core';
import { faLanguage } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrl: './options.component.css',
})
export class OptionsComponent {
  faLanguage = faLanguage;
}
