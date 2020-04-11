import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  showFiller = false;
  mainNotice = false;
  navLinks = [
    { path: 'events', label: 'Virtual Events' },
    { path: 'rec', label: 'REC Announcements' },
    { path: 'moreinfo', label: 'Helpful Services' },
    // { path: 'mijalis', label: 'Mijalis 2020' },
    { path: 'resources', label: 'COVID-19 Resources' },
    { path: 'faq', label: 'COVID-19 FAQs' },
  ];

  panelOpenState = false;
}
