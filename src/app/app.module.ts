import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RoutingModule  } from './routing.module';

import { AppComponent } from './app.component';
import { AppHeaderComponent } from './components/app-header/app-header.component';
import { LandingComponentComponent } from './components/landing-component/landing-component.component';
import { IncidentComponentComponent } from './components/incident-component/incident-component.component';
import { DetailComponentComponent } from './components/detail-component/detail-component.component';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    LandingComponentComponent,
    IncidentComponentComponent,
    DetailComponentComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
