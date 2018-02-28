import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import {ActivatedRoute} from '@angular/router';
import {SpotifyService} from '../../spotify.service';

@Component({
  selector: 'app-artist-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.css']
})
export class AlbumListComponent implements OnInit {
  id: string;
  artistAlbumList: Object;

  constructor(private route: ActivatedRoute,
              private spotify: SpotifyService,
              private location: Location) {
    this.route.params.subscribe(params => { this.id = params['id']; });
  }

  ngOnInit(): void {
    this.spotify.tokenSubject.subscribe((token) => {
      this.spotify
        .getArtistAlbumList(this.id)
        .subscribe((res: any) => this.renderArtistAlbumList(res));
    });
  }

  back(): void {
    this.location.back();
  }

  renderArtistAlbumList(res: any): void {
    this.artistAlbumList = res;
  }

}
