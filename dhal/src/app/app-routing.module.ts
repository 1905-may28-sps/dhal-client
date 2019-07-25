import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RegistrationComponent} from './components/registration/registration.component';
import {SignInComponent} from './components/sign-in/sign-in.component';


const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: RegistrationComponent},
  {path: 'registration', component: RegistrationComponent},
  {path: 'signIn', component: SignInComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
