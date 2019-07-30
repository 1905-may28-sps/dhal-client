import { Component, OnInit, Input, ElementRef } from '@angular/core';

@Component({
  selector: 'app-splashcard',
  templateUrl: './splashcard.component.html',
  styleUrls: ['./splashcard.component.scss']
})
export class SplashcardComponent implements OnInit {

  @Input() imageUrl: string;
  @Input() parent: HTMLElement;
  @Input() dashboardId : number;
  showTracks = false;

  constructor() {
  }

  ngOnInit() {
  }

  showTrackList() {
    if (this.parent && this.parent.className === 'selected') {
      this.showTracks = true;
    }
  }

  showCover() {
    this.showTracks = false;
  }

}

