import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {
  APP_BASE_HREF
} from '@angular/common';

import {AppComponent} from './app.component';
import {AlbumComponent} from './album/album.component';
import {TrackComponent} from './track/track.component';
import {SearchComponent} from './search/search.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {AppRoutingModule} from './app-routing.module';

import {SPOTIFY_PROVIDERS} from './spotify.service';

@NgModule({
  declarations: [
    AppComponent,
    AlbumComponent,
    TrackComponent,
    SearchComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [SPOTIFY_PROVIDERS,
    {provide: APP_BASE_HREF, useValue: '/'}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
