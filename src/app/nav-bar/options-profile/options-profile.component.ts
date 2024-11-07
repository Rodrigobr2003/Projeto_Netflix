import { Component } from '@angular/core';
import {
  faMagnifyingGlass,
  faBell,
  faCaretDown,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-options-profile',
  templateUrl: './options-profile.component.html',
  styleUrl: './options-profile.component.css',
})
export class OptionsProfileComponent {
  magnifyingGlass = faMagnifyingGlass;
  bell = faBell;
  caretDown = faCaretDown;
}
