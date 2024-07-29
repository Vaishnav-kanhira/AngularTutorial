import { Component, Input, OnInit } from '@angular/core';
import { Todo } from '../../../../data/Todo';

@Component({
  selector: 'app-todo-list-item',
  standalone: true,
  imports: [],
  templateUrl: './todo-list-item.component.html',
  styleUrl: './todo-list-item.component.css',
})
export class TodoListItemComponent {
  @Input() todo!: Todo

  onClick() {
    console.log(`onclick called for serialNumber = ${this.todo.serialNumber}`)
  }
}