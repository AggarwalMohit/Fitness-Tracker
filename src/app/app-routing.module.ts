import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './auth/login/login.component';
import { SignComponent } from './auth/sign/sign.component';
import { CurrentComponent } from './training/current/current.component';
import { NewTrainingComponent } from './training/new-training/new-training.component';
import { PastTrainingComponent } from './training/past-training/past-training.component';
import { TrainingComponent } from './training/training.component';
import { AuthGaurd } from './auth/Auth-gaurd';


const routes: Routes = [
  {path:'',component:WelcomeComponent},
  {path:'auth/login',component:LoginComponent},
  {path:'auth/signin',component:SignComponent},
  {path:'training',component:TrainingComponent,canActivate:[AuthGaurd],
  children:[{path:'current',component:CurrentComponent,canActivateChild:[AuthGaurd]}]
},
 
  {path:'training/newtraining',component:NewTrainingComponent,canActivate:[AuthGaurd]},
  {path:'training/past-training',component:PastTrainingComponent,canActivate:[AuthGaurd]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGaurd]
})
export class AppRoutingModule { }
