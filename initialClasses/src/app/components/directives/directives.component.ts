import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {
  size = '1.5rem';
  font = 'Arial';
  color = 'dodgerblue';
  classes = ['green-title', 'small-title'];
  underlineClass = 'underline';

  constructor() { }

  ngOnInit(): void {
  }

}
