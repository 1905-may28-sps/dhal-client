import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RegistrationComponent} from './components/registration/registration.component';
import {SignInComponent} from './components/sign-in/sign-in.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {tracks} from './shared/tracks';
import {ApiService} from './services/api.service/api.service';
import {SplashpageComponent} from './components/splashpage/splashpage.component';


const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'registration', component: RegistrationComponent},
  {path: 'signIn', component: SignInComponent},
  {path: 'splash', component: SplashpageComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


  constructor(private apiService: ApiService) {

  }
  lsttracks: tracks[] = [];
  trk: tracks = new tracks();

  ngOnInit() {
    // Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    // Add 'implements OnInit' to the class.
    this.apiService.gettracks().subscribe(
      data => {
        this.lsttracks = data;
        console.log('in subscribe' );
        console.log(this.lsttracks);
        const res: tracks[] = [];

        for (const x in this.lsttracks) {
          for (let i = 0; i < data.total; i++) {
            this.lsttracks.hasOwnProperty(x) && res.push(this.lsttracks[x][i]); }

          this.lsttracks = res;
        }
        console.log(this.lsttracks[0]);
      });
    console.log(this);
  }


}
