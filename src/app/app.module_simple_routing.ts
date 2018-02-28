/*import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {
  RouterModule,
  Routes
} from '@angular/router';
import {
  APP_BASE_HREF
} from '@angular/common';

import {AppComponent} from './app.component';
import {AlbumComponent} from './album/album.component';
import {ArtistComponent} from './artist/artist.component';
import {TrackComponent} from './track/track.component';
import {SearchComponent} from './search/search.component';
import {AlbumListComponent} from './artist/album-list/album-list.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {AppRoutingModule} from './app-routing.module';

import {SPOTIFY_PROVIDERS} from './spotify.service';


const routes: Routes = [
  {path: '', redirectTo: 'search', pathMatch: 'full'},
  {path: 'search', component: SearchComponent},
  {
    path: 'artists/:id',
    component: ArtistComponent,
    children: [
      {path: 'albums', component: AlbumListComponent},
    ]
  },
  {path: 'tracks/:id', component: TrackComponent},
  {path: 'albums/:id', component: AlbumComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ArtistComponent,
    AlbumComponent,
    TrackComponent,
    SearchComponent,
    AlbumListComponent,
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
*/
