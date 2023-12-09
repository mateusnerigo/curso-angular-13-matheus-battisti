import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private message: string = '';
  private messageTimeInSeconds: number = 4;
  constructor() { }

  get(): string {
    return this.message;
  }

  set(message: string): void {
    this.message = message;

    setTimeout(() => {
      this.clear();
    }, (this.messageTimeInSeconds * 1000))
  }

  clear() {
    this.message = '';
  }
}
