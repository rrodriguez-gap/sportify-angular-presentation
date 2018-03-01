import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AlbumComponent} from './album/album.component';
import {TrackComponent} from './track/track.component';
import {SearchComponent} from './search/search.component';
import {LoginComponent} from './login/login.component';
import {ProtectedComponent} from './protected/protected.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {LoggedInGuard} from './logged-in.guard';

import {
  routes as childRoutes,
  ArtistRoutingModule
} from './artist/artist-routing.module';

const routes: Routes = [
  {path: '', redirectTo: 'search', pathMatch: 'full'},
  {path: 'search', component: SearchComponent},
  {path: 'tracks/:id', component: TrackComponent},
  {path: 'albums/:id', component: AlbumComponent},
  {path: 'login', component: LoginComponent},
  // Nested route
  {
    path: 'artists',
    children: childRoutes
  },
  // protected route
  {
    path: 'protected',
    component: ProtectedComponent,
    canActivate: [LoggedInGuard]
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
