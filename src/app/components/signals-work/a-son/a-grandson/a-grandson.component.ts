import {ChangeDetectionStrategy, Component, inject, Input} from '@angular/core';
import {SignalService} from "../../../../services/signal.service";

@Component({
  selector: 'app-a-grandson',
  standalone: true,
  imports: [],
  templateUrl: './a-grandson.component.html',
  styleUrl: './a-grandson.component.css',
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class AGrandsonComponent {

  signalService:SignalService = inject(SignalService);
  @Input() stateNumber!: number;


  getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
}
