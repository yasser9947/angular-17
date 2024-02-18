import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import {AppComponent} from "./app.component";
import {ActivatedRoute, provideRouter, RouterLink, RouterLinkActive, RouterModule, RouterOutlet} from "@angular/router";
import {BrowserModule} from "@angular/platform-browser";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {routes} from "./app.routes";
import {StandaloneComponent} from "./components/standalone/standalone.component";
import {NoneStandaloneModule} from "./module/none-standalone/none-standalone.module";


@NgModule({
  declarations: [
    AppComponent,
    StandaloneComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    NoneStandaloneModule
  ],
  bootstrap:[AppComponent]
})
export class AppModule { }
