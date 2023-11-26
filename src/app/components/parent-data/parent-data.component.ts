import { Component, OnInit, Input } from '@angular/core';
import { IUserData } from 'src/app/types/userData.model';

@Component({
  selector: 'app-parent-data',
  templateUrl: './parent-data.component.html',
  styleUrls: ['./parent-data.component.css']
})
export class ParentDataComponent implements OnInit {
  @Input() userData: IUserData = { name: '', age: 0, role: '' };

  constructor() { }

  ngOnInit(): void {
  }

}
