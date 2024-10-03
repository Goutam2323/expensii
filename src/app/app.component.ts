import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  Router,
  NavigationEnd,
  RouterLink,
  RouterOutlet,
} from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'expensii';
  isvisible = true;
  start_text = 'Start Your Journey';

  constructor(private router: Router) {
    // Listen for route changes
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Show the homepage only if the user is on the root route '/'
        this.isvisible = this.router.url === '/';
      }
    });
  }

  journey() {
    this.start_text = 'Enjoy Your Journey';
    // Navigate to the next page
  }
}
