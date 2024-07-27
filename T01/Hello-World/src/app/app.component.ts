import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoListingComponent } from "./todos/todo_listing/todo-listing/todo-listing.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TodoListingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'timer started'
  time = 0

  constructor() {
    let time = 3000
    setTimeout(() => {
      this.time = time
      this.title = "timer ended"
    }, time);
  }
}
