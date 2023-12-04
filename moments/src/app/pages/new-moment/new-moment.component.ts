import { Component, OnInit } from '@angular/core';

import { IMoment } from '../../types/index';

import { MomentService } from 'src/app/services/moment.service';

@Component({
  selector: 'app-new-moment',
  templateUrl: './new-moment.component.html',
  styleUrls: ['./new-moment.component.css']
})
export class NewMomentComponent implements OnInit {
  submitFormButtonText: string = 'Share it!';

  constructor(private momentService: MomentService) { }

  ngOnInit(): void {
  }

  async handleSubmit(momentSubmitedEvent: IMoment) {
    const formData = new FormData();
    formData.append('title', momentSubmitedEvent.title);
    formData.append('description', momentSubmitedEvent.description);
    if (momentSubmitedEvent.image) {
      formData.append('image', momentSubmitedEvent.image);
    }

    await this.momentService
      .createMoment(formData)
      .subscribe()
  }
}
