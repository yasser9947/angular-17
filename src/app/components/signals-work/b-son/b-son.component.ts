import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {SignalService} from "../../../services/signal.service";

@Component({
  selector: 'app-b-son',
  standalone: true,
  imports: [],
  templateUrl: './b-son.component.html',
  styleUrl: './b-son.component.css',
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class BSonComponent {
  signalService:SignalService = inject(SignalService);

  getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
}
