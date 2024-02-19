import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {StandaloneComponent} from "./components/standalone/standalone.component";
import {IfForSwitchComponent} from "./components/if-for-switch/if-for-switch.component";
import {DeferComponent} from "./components/defer/defer.component";
import {SignalsComponent} from "./components/signals/signals.component";
import {SignalsWorkComponent} from "./components/signals-work/signals-work.component";

const routes: Routes = [

  {
    path:"standalone",
    loadComponent:()=>StandaloneComponent

  },
  {
    path:"signals",
    loadComponent:()=>SignalsComponent
  },
  {
    path:"signals-work",
    loadComponent:()=>SignalsWorkComponent

  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
