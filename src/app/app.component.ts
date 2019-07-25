import { Component } from '@angular/core';
import {ApiService} from './services/apiService';
import {tracks} from './classes/tracks';
import {genre} from './classes/genre';
import {albums} from './classes/album';
import {artist} from './classes/artist';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'clientSide';


  constructor(private _ApiService: ApiService) {

  }
   lsttracks:tracks[] = [];
   trk: tracks = new tracks();
  
  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this._ApiService.gettracks().subscribe(
      data=>{
        this.lsttracks=data;
        console.log('in subscribe' );
        console.log(this.lsttracks);
        var res: tracks[] = [];

           for (var x in this.lsttracks){
for (let i = 0; i < data.total; i++){
           this.lsttracks.hasOwnProperty(x) && res.push(this.lsttracks[x][i]); }
           
   this.lsttracks=res;
}
console.log(this.lsttracks[0]);
      });
  console.log(this)
  }


  










}
