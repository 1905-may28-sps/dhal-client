import { Component } from '@angular/core';
import { HeroService } from './hero.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 //Testservice
  constructor(private svc: HeroService, private http: HttpClient) {
    this.svc.printToConsole("Got the service");
  }
  //https://api.github.com/users/angel-cruz
  ngOnInit() {
    let obs = this.http.get('https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=album:"good things"') 
    obs.subscribe((response) => console.log(response));
  }
  onClickMe(){
    let obsplaylist = this.http.get('https://cors-anywhere.herokuapp.com/https://api.deezer.com/playlist/908622995')
    obsplaylist.subscribe((response) => console.log(response))
  }
}
