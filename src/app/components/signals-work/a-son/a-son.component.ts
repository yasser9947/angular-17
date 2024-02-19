import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {AGrandsonComponent} from "./a-grandson/a-grandson.component";

@Component({
  selector: 'app-a-son',
  standalone: true,
  imports: [
    AGrandsonComponent
  ],
  templateUrl: './a-son.component.html',
  styleUrl: './a-son.component.css',
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class ASonComponent {
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
