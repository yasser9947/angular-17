import {Component, inject} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [
    RouterLink,
    RouterLinkActive,
    RouterOutlet
  ],
  standalone: true
})
export class AppComponent {
  title = 'ang17';

  http:HttpClient = inject(HttpClient);


}
