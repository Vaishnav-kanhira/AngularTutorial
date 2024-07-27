import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoComponent } from "./todos/todo/todo.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TodoComponent],
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
