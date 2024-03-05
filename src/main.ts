
import {bootstrapApplication} from "@angular/platform-browser";
import {AppComponent} from "./app/app.component";
import {provideRouter, Routes} from "@angular/router";
import {StandaloneComponent} from "./app/components/standalone/standalone.component";
import {SignalsComponent} from "./app/components/signals/signals.component";
import {SignalsWorkComponent} from "./app/components/signals-work/signals-work.component";
import {provideHttpClient} from "@angular/common/http";
import {IfForSwitchComponent} from "./app/components/if-for-switch/if-for-switch.component";
import {routes} from "./app/app.routes";




bootstrapApplication(AppComponent , {
  providers:[provideRouter(routes) , provideHttpClient()]
})

