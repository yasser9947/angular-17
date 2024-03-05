import { Component } from '@angular/core';
import {BlogComponent} from "./blog/blog.component";

@Component({
  selector: 'app-defer',
  standalone: true,
  imports: [
    BlogComponent
  ],
  templateUrl: './defer.component.html',
  styleUrl: './defer.component.css'
})
export class DeferComponent {

  flag:boolean = false;

  constructor() {

    setTimeout(() => {
      this.flag = true
    } , 3000)
  }
}
