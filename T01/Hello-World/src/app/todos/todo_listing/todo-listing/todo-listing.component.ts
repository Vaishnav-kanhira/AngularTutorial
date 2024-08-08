import { Component } from '@angular/core';
import { Todo } from '../../../../data/Todo';
import { CommonModule } from '@angular/common';
import { TodoListItemComponent } from "../../todo_list_item/todo-list-item/todo-list-item.component";
import { AddTodoComponent } from "../../add_todo/add-todo/add-todo.component";

@Component({
  selector: 'app-todo-listing',
  standalone: true,
  imports: [CommonModule, TodoListItemComponent, AddTodoComponent],
  templateUrl: './todo-listing.component.html',
  styleUrl: './todo-listing.component.css'
})
export class TodoListingComponent {
  todos: Todo[]

  constructor() {
    this.todos = [
      new Todo(1, "title 1", "description 1", false),
      new Todo(2, "title 2", "description 2", false),
      new Todo(3, "title 3", "description 3", false),
      new Todo(4, "title 4", "description 4", false),
    ]
  }
  deleteTodo(todo: Todo) {
    let index = this.todos.indexOf(todo)
    this.todos.splice(index,1)
    console.log(todo)
  }
}