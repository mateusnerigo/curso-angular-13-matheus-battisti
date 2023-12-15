import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommentService } from 'src/app/services/comment.service';
import { MessageService } from 'src/app/services/message.service';
import { MomentService } from 'src/app/services/moment.service';
import { IComment, IMoment } from 'src/app/types';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-moment',
  templateUrl: './moment.component.html',
  styleUrls: ['./moment.component.css']
})
export class MomentComponent implements OnInit {
  moment?: IMoment;
  baseApiUrl: string = environment.baseApiUrl;

  commentForm!: FormGroup;

  constructor(
    private momentService: MomentService,
    private messageService: MessageService,
    private commentService: CommentService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.momentService
      .getMomentById(id)
      .subscribe((item) => {
        this.moment = item.data;
      })

    this.commentForm = new FormGroup({
      text: new FormControl('', [Validators.required]),
      username: new FormControl('', [Validators.required])
    })
  }

  get text() {
    return this.commentForm.get('text')!;
  }

  get username() {
    return this.commentForm.get('username')!;
  }

  async deleteHandler(id: number) {
    await this.momentService
      .deleteMoment(id)
      .subscribe();

    this.messageService.set("Moment deleted!");

    this.router.navigate(['/']);
  }

  async onSubmit(formDirective: FormGroupDirective) {
    if (this.commentForm.invalid) { return; }

    const data: IComment = this.commentForm.value;
    data.momentId = Number(this.moment!.id);

    await this.commentService
      .createComment(data)
      .subscribe((comment) => {
        this.moment!.comments!.push(comment.data);
      })

    this.messageService.set('Comment sent!');
    this.commentForm.reset();
    formDirective.resetForm();
  }
}
