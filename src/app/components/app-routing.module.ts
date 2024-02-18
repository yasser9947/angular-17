import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {StandaloneComponent} from "./standalone/standalone.component";
import {IfForSwitchComponent} from "./if-for-switch/if-for-switch.component";
import {DeferComponent} from "./defer/defer.component";
import {SignalsComponent} from "./signals/signals.component";

const routes: Routes = [
  {
    path :"standalone",
    component:StandaloneComponent
  },
  {
    path :"if-for-switch",
    component:IfForSwitchComponent
  },{
    path :"defer",
    component:DeferComponent
  },{
    path :"signals",
    component:SignalsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
