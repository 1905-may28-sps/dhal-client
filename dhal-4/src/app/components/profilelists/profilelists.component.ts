import { Component, OnInit } from '@angular/core';
import {Playlist} from '../../shared/playlist';

@Component({
  selector: 'app-profilelists',
  templateUrl: './profilelists.component.html',
  styleUrls: ['./profilelists.component.scss']
})
export class ProfilelistsComponent implements OnInit {
  playlists: Playlist[] = [];

  constructor() { }

  ngOnInit() {
  }


}
