import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EsdLandingComponent} from './esd-landing/esd-landing.component';
import {EsdLoginComponent} from './esd-login/esd-login.component';
import {EsdHomeComponent} from './esd-home/esd-home.component';
import {EsdDashboardComponent} from './esd-dashboard/esd-dashboard.component';
import {EsdPlanMyEventComponent} from './esd-plan-my-event/esd-plan-my-event.component';

const routes: Routes = [
  { path: 'landing', component: EsdLandingComponent },
  { path: 'login', component: EsdLoginComponent },
  { path: 'home', component: EsdHomeComponent },
  { path: 'dashboard', component: EsdDashboardComponent },
  { path: 'planmyevent', component: EsdPlanMyEventComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
