import { Component, Input, OnInit } from '@angular/core';
import { TodoItem } from '../interfaces/todo-item';

@Component({
  selector: 'app-todo-item',
  template: `<div class="todo-item">
      {{item.title}}
      </div>
  `,
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {

  @Input() item:TodoItem; //@ mówi o danych, które komponent dostanie więc input czeka na dane | po dwukropku odwołanie do interface, żeby wiedział jaki kształt będzie miała informacja podana

  constructor() {

  }

  ngOnInit(): void {
  }

}
