import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IMoment } from 'src/app/types';

@Component({
  selector: 'app-moment-form',
  templateUrl: './moment-form.component.html',
  styleUrls: ['./moment-form.component.css']
})
export class MomentFormComponent implements OnInit {
  @Input() submitButtonText!: string;
  @Output() onSubmit = new EventEmitter<IMoment>();

  momentForm!: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.momentForm = new FormGroup({
      id: new FormControl(''),
      title: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      image: new FormControl('')
    })
  }

  get title() {
    return this.momentForm.get('title')!;
  }

  get description() {
    return this.momentForm.get('description')!;
  }

  onFileSelected(onSelectedEvent: any) {
    const file: File = onSelectedEvent.target.files[0];
    this.momentForm.patchValue({ image: file });
  }

  handleFormSubmit() {
    if (this.momentForm.invalid) {
      return;
    }

    this.onSubmit.emit(this.momentForm.value);
  }
}
