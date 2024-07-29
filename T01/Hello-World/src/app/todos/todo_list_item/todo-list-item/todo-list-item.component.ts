import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();

  onClick(todo: Todo) {
    this.todoDelete.emit(todo)
    console.log(`deleted serialNumber = ${this.todo.serialNumber}`)
  }
}