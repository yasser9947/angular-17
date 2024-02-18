import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {AppModule} from "./app/components/app.module";



platformBrowserDynamic().bootstrapModule(AppModule).catch(e => console.log(e))


