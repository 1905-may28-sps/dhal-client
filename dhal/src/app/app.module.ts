import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlipModule } from 'ngx-flip';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {SplashpageComponent} from './components/splashpage/splashpage.component';
import { CommentsComponent } from './components/comments/comments.component';
import { SplashcardComponent } from './components/splashpage/components/splashcard/splashcard.component';
import {ProfilepageComponent} from './components/profilepage/profilepage.component';
import { TrackListComponent } from './components/track-list/track-list.component';
import { ArtistListComponent } from './components/artist-list/artist-list.component';
import { AlbumListComponent } from './components/album-list/album-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RegistrationComponent,
    SignInComponent,
    DashboardComponent,
    SplashpageComponent,
    CommentsComponent,
    SplashcardComponent,
    ProfilepageComponent,
    TrackListComponent,
    ArtistListComponent,
    AlbumListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlipModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
