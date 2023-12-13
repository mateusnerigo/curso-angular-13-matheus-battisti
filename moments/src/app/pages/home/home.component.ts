import { Component, OnInit } from '@angular/core';

import { environment } from 'src/environments/environment';

import { MomentService } from 'src/app/services/moment.service';
import { IMoment } from 'src/app/types';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  allMoments: IMoment[] = [];
  filteredMoments: IMoment[] = [];
  searchTerm: string = '';

  baseApiUrl = environment.baseApiUrl;

  constructor(private momentService: MomentService) { }

  ngOnInit(): void {
    this.momentService
      .getMoments()
      .subscribe((items) => {
        const recData = items.data;
        recData.map((item) => {
          item.created_at = new Date(item.created_at!).toLocaleDateString('pt-BR');
        })

        this.allMoments = recData;
        this.filteredMoments = recData;
      });

  }

  search(event: Event): void {
    const target = event.target as HTMLInputElement;
    const value = target.value;

    this.filteredMoments = this.allMoments
      .filter((moment) => {
        return moment.title.toLowerCase().includes(value)
      });
  }
}
