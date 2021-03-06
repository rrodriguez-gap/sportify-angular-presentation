import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';

import {SpotifyService} from '../spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {
  id: string;
  artist: Object;
  artistTopTracks: Object;

  constructor(private route: ActivatedRoute, private spotify: SpotifyService,
              private location: Location) {
    route.params.subscribe(params => {
      this.id = params['id'];
    });
  }

  ngOnInit() {
    this.spotify.tokenSubject.subscribe((token) => {
      this.spotify
        .getArtist(this.id)
        .subscribe((res: any) => this.renderArtist(res));
      this.spotify
        .getArtistTopTracks(this.id)
        .subscribe((res: any) => this.renderArtistTopTracks(res));
    });
  }

  back(): void {
    this.location.back();
  }

  renderArtist(res: any): void {
    this.artist = res;
  }

  renderArtistTopTracks(res: any): void {
    this.artistTopTracks = res;
  }

}
