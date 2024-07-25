import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'timer started'
  time = 0

  constructor() {
    setTimeout(() => {
      this.time = 3
      this.title = "timer ended"
    }, 3000);
  }
}
