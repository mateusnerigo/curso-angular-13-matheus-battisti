import { Component, OnInit } from '@angular/core';
import { IAnimal } from 'src/app/types/general.model';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent implements OnInit {
  animals: IAnimal[] = [
    { type: 'Lontra', name: 'Sabrina' },
    { type: 'Canguru', name: 'Kiulee' },
    { type: 'Panda', name: 'Panda' },
    { type: 'Baleia', name: 'Bailey' },
    { type: 'Chimpanzé', name: 'Panzo' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
