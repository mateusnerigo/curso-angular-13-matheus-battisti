import { Component, OnInit } from '@angular/core';
import { IAnimal } from 'src/app/types/general.model';

import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent implements OnInit {
  animals: IAnimal[] = [];

  constructor(private listService: ListService) {
    this.getAnimals()
  }

  ngOnInit(): void { }

  removeAnimal(animal: IAnimal): void {
    this.listService
      .remove(animal.id)
      .subscribe(() => {
        this.getAnimals();
      });
  }

  getAnimals(): void {
    this.listService
      .getAll()
      .subscribe((animals: IAnimal[]) => {
        this.animals = animals;
      });
  }
}
