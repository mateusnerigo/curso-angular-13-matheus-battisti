import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'src/app/services/message.service';
import { MomentService } from 'src/app/services/moment.service';
import { IMoment } from 'src/app/types';

@Component({
  selector: 'app-edit-moment',
  templateUrl: './edit-moment.component.html',
  styleUrls: ['./edit-moment.component.css']
})
export class EditMomentComponent implements OnInit {
  moment!: IMoment;
  btnText: string = 'Finish editing';

  constructor(
    private momentService: MomentService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));

    this.momentService
      .getMomentById(id)
      .subscribe((item) => {
        this.moment = item.data;
      })
  }

  async editHandler(momentData: IMoment) {
    const id = this.moment.id;
    const formData = new FormData();

    formData.append('title', momentData.title);
    formData.append('description', momentData.description);

    if (momentData.image) {
      formData.append('image', momentData.image);
    }

    await this.momentService
      .updateMoment(id!, formData)
      .subscribe();

    this.messageService
      .set(`Moment ${id} successfully updated`);

    this.router.navigate(['/']);
  }

}
