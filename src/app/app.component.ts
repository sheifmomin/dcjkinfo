import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  navLinks = [
    { path: 'primary', label: 'Pre-Primary & Primary' },
    { path: 'secondary', label: 'Secondary' },
    // { path: 'general', label: 'General' },
  ];

  panelOpenState = false;
}
