import {Component, computed, effect, inject, Signal, signal, WritableSignal} from '@angular/core';
import {SignalService} from "../../services/signal.service";
import {interval} from "rxjs";

@Component({
  selector: 'app-signals',
  standalone: true,
  imports: [],
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.css'
})
export class SignalsComponent {
  yasir:WritableSignal<any> = signal(1);
  faisal:Signal<any> = computed(()=>  this.yasir() * 99);

  x = signal(77);
  y = computed(() => this.x() * 6 )






  constructor() {

    this.x.set(83764);

    // let x = 1;
    // let y = 4
    // let z = x + y
    //
    // console.log( "z is "+z ) // 5
    //
    // x = 9 ;
    // console.log( "z is "   + z ) // 5
    //

  }

  ef = effect(()=>{
    console.log( "y is change "  +  this.y() )

  })

}
