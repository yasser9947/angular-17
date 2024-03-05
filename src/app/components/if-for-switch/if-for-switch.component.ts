import { Component } from '@angular/core';
import {ASonComponent} from "../signals-work/a-son/a-son.component";

@Component({
  selector: 'app-if-for-switch',
  standalone: true,
  imports: [
    ASonComponent
  ],
  templateUrl: './if-for-switch.component.html',
  styleUrl: './if-for-switch.component.css'
})
export class IfForSwitchComponent {

  flag:boolean = true;

  constructor() {
  }
}
