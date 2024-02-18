import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NoneStandaloneRoutingModule } from './none-standalone-routing.module';
import {NoneStandaloneComponent} from "./none-standalone.component";


@NgModule({
  declarations: [NoneStandaloneComponent],
  imports: [
    CommonModule,
    NoneStandaloneRoutingModule
  ]
})
export class NoneStandaloneModule { }
