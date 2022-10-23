import { Component } from '@angular/core';
import { TodoItem } from '../interfaces/todo-item';

@Component({
  selector: 'app-list-manager',
  template: `
  <div class="todo-app">
  <app-input-button-unit (submit)="addItem($event)"></app-input-button-unit>
  <ul>
  <li *ngFor="let todoItem of todoList"> <!-- petla for -->
    <app-todo-item [item] = "todoItem"></app-todo-item>
  </li>
</ul>
</div>
  `,
  styleUrls: ['./list-manager.component.scss']
})
export class ListManagerComponent {

  title = 'todo-list';
  todoList: TodoItem[] = [ //te dane które są poniżej są typu takiego jak w interfejsie
    {title: 'install NodeJS'},
    {title: 'install Angular CLI'},
    {title: 'create new app'},
    {title: 'serve app'},
    {title: 'develop app'},
    {title: 'deploy app'},
  ];

  addItem(item: string) {
    this.todoList.push(
      {title: item});
  }

}
