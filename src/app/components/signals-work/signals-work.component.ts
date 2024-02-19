import {Component, inject} from '@angular/core';
import {SignalService} from "../../services/signal.service";
import {ASonComponent} from "./a-son/a-son.component";
import {BSonComponent} from "./b-son/b-son.component";

@Component({
  selector: 'app-signals-work',
  standalone: true,
  imports: [
    ASonComponent,
    BSonComponent
  ],
  templateUrl: './signals-work.component.html',
  styleUrl: './signals-work.component.css'
})
export class SignalsWorkComponent {
  signalService:SignalService = inject(SignalService);
  stateNumber:number=0

  getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  incrementStateNumber(){
    this.stateNumber = this.stateNumber + 1
  }
}
