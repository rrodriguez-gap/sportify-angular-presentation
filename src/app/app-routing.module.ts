import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AlbumComponent} from './album/album.component';
import {ArtistComponent} from './artist/artist.component';
import {TrackComponent} from './track/track.component';
import {SearchComponent} from './search/search.component';
import {
  routes as childRoutes,
  ArtistRoutingModule
} from './artist/artist-routing.module';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path: '', redirectTo: 'search', pathMatch: 'full'},
  {path: 'search', component: SearchComponent},
  {path: 'tracks/:id', component: TrackComponent},
  {path: 'albums/:id', component: AlbumComponent},
  // Nested route
  {
    path: 'artists',
    children: childRoutes
  },
  // Everything else
  {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes
    ),
    ArtistRoutingModule
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
