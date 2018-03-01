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
import {LoginComponent} from './login/login.component';
import {ProtectedComponent} from './protected/protected.component';

import {SPOTIFY_PROVIDERS} from './spotify.service';
import {AUTH_PROVIDERS} from './auth.service';
import { LoggedInGuard } from './logged-in.guard';

@NgModule({
  declarations: [
    AppComponent,
    AlbumComponent,
    TrackComponent,
    SearchComponent,
    PageNotFoundComponent,
    LoginComponent,
    ProtectedComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    AUTH_PROVIDERS,
    SPOTIFY_PROVIDERS,
    {provide: APP_BASE_HREF, useValue: '/'},
    LoggedInGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
