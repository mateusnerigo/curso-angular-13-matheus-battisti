import { Component } from '@angular/core';
import { IUserData } from 'src/app/types/userData.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userData: IUserData = {
    name: 'Mateus',
    age: 28,
    role: 'Programador'
  };

  title = 'battisti-13';
}
