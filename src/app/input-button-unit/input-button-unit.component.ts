import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-button-unit',
  template: `
  <input class="todo-input" [value]="title" (keyup.enter)="changeTitle($event.target.value)" #inputElementRef>
  <button class="btn" (click)="changeTitle(inputElementRef.value)">Save</button>`,
  styleUrls: ['./input-button-unit.component.scss']
})
export class InputButtonUnitComponent implements OnInit {
  title = "Hello ngGirls";

  @Output() submit: EventEmitter<string> = new EventEmitter<string>();


  constructor() {

  }

  ngOnInit(): void {
  }

  changeTitle(newTitle: string) { //typescript
    this.submit.emit(newTitle); //wysyłamy info do rodzica
  }

  generateTitle() {
    return "Good day"
  }

}
