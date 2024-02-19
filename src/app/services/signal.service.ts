import {Injectable, signal, WritableSignal} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignalService {

  signalNumber:WritableSignal<number> = signal(0)
  stateServiceNumber:number=0;


  constructor() { }

  incrementSignalNumber(){
    this.signalNumber.update(e => e+1)
  }
  incrementStateServiceNumber(){
    this.stateServiceNumber = this.stateServiceNumber + 1;
  }

}
