import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  showFiller = false;

  navLinks = [
    { path: 'events', label: 'Virtual Events' },
    { path: 'rec', label: 'REC Announcements' },
    { path: 'moreinfo', label: 'Helpful Services & Info.' },
    { path: 'mijalis', label: 'Mijalis 2020' },
  ];

  panelOpenState = false;
}
