import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  isShowingMessage: boolean = true;
  buttonText: string = 'Esconder mensagem';

  constructor() { }

  ngOnInit(): void { }

  toggleMessage(): void {
    this.isShowingMessage = !this.isShowingMessage;
    this.buttonText = (this.isShowingMessage)
      ? 'Esconder mensagem'
      : 'Mostrar mensagem';
  }
}
