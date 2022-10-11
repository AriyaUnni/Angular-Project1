import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ViewAirlinesComponent } from './view-airlines/view-airlines.component';
import { ViewPassengersComponent } from './view-passengers/view-passengers.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ViewAirlinesComponent,
    ViewPassengersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
