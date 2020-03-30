import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rec',
  templateUrl: './rec.component.html',
  styleUrls: ['./rec.component.scss']
})
export class RecComponent implements OnInit {

  navLinks = [
    { path: 'general', label: 'General' },
    { path: 'primary', label: 'Pre-Primary & Primary' },
    { path: 'secondary', label: 'Secondary' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
