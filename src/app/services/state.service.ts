import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  changeColor: EventEmitter<string> = new EventEmitter();
  showMessages: EventEmitter<boolean> = new EventEmitter();
}
