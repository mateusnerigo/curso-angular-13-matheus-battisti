import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-emmiter-change-number',
  templateUrl: './emmiter-change-number.component.html',
  styleUrls: ['./emmiter-change-number.component.css']
})
export class EmmiterChangeNumberComponent implements OnInit {
  @Output() changeNumber: EventEmitter<any> = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }

  handleClick() {
    this.changeNumber.emit();
  }
}
