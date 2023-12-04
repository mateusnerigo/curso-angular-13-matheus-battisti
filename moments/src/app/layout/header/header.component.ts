import { Component, OnInit } from '@angular/core';
import { INavLinks } from 'src/app/types';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  navMenu: INavLinks[] = [
    { route: '', text: 'Home' },
    { id: 'shareMoment', route: '/moments/new', text: 'Share' },
    { route: '/about', text: 'About' },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
