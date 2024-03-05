import { Routes } from '@angular/router';
import {SignalsComponent} from "./components/signals/signals.component";
import {SignalsWorkComponent} from "./components/signals-work/signals-work.component";
import {IfForSwitchComponent} from "./components/if-for-switch/if-for-switch.component";
import {DeferComponent} from "./components/defer/defer.component";
import {MovieComponent} from "./components/movie/movie.component";


export const routes: Routes = [

  {
    path:"signals",
    loadComponent:()=>SignalsComponent
  },
  {
    path:"signals-work",
    loadComponent:()=>SignalsWorkComponent

  } , {
    path:"if-for-switch",
    component:IfForSwitchComponent
  } , {
    path:"defer" ,
    component:DeferComponent
  } ,{
  path:"movie",
    component:MovieComponent
  }

];
