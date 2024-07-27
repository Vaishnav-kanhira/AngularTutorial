import { Component } from '@angular/core';
import { Todo } from '../../../../data/Todo';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo-listing',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo-listing.component.html',
  styleUrl: './todo-listing.component.css'
})
export class TodoListingComponent {
  todos: Todo[]

  constructor() {
    this.todos = [
      new Todo(0, "title 1", "description 1", false),
      new Todo(0, "title 2", "description 2", false),
      new Todo(0, "title 3", "description 3", false),
      new Todo(0, "title 4", "description 4", false),
    ]
  }
}