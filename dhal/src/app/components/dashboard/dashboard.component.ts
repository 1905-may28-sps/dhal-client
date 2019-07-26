import { Component, OnInit } from '@angular/core';
import {tracks} from '../../shared/tracks';
import {ApiService} from '../../services/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  title = 'clientSide';


  constructor(private apiService: ApiService) {

  }
  lsttracks: tracks[] = [];
  trk: tracks = new tracks();
  // @ts-ignore
  // playlist: Playlist = new Playlist();
  public trackId = 0;

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
            this.lsttracks.hasOwnProperty(x) && res.push(this.lsttracks[x][i]);
            // console.log(this.lsttracks[x][i]);
          }

          this.lsttracks = res;
        }
        console.log(this.lsttracks[0]);
      });
    console.log(this);
  }



  addToPlaylist(id) {
    console.log(this.lsttracks);
    console.log(this.lsttracks[0]);
    console.log(this.trackId);
    console.log(id);


    console.log('Adding to playlist');

    // this.playlist.playlistId = this;

  }

}
