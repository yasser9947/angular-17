import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {StandaloneComponent} from "./components/standalone/standalone.component";
import {IfForSwitchComponent} from "./components/if-for-switch/if-for-switch.component";
import {DeferComponent} from "./components/defer/defer.component";
import {SignalsComponent} from "./components/signals/signals.component";

const routes: Routes = [


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
