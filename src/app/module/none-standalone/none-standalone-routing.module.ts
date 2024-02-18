import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NoneStandaloneComponent} from "./none-standalone.component";

const routes: Routes = [
  {
    path:"module",
    children:[
      {
        path:"none-standalone",
        component:NoneStandaloneComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NoneStandaloneRoutingModule { }
