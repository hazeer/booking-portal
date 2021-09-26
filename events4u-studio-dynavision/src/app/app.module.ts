import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MaterialModule} from './material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EsdLandingComponent } from './esd-landing/esd-landing.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EsdLoginComponent } from './esd-login/esd-login.component';
import { EsdHomeComponent } from './esd-home/esd-home.component';
import { EsdDashboardComponent } from './esd-dashboard/esd-dashboard.component';
import { EsdPlanMyEventComponent } from './esd-plan-my-event/esd-plan-my-event.component';

@NgModule({
  declarations: [
    AppComponent,
    EsdLandingComponent,
    EsdLoginComponent,
    EsdHomeComponent,
    EsdDashboardComponent,
    EsdPlanMyEventComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
