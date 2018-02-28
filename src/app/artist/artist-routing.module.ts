import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  RouterModule,
  ActivatedRoute,
  Router,
  Routes
} from '@angular/router';

import {ArtistComponent} from './artist.component';
import {AlbumListComponent} from './album-list/album-list.component';

export const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '../'},
  {path: ':id/albums', component: AlbumListComponent},
  {path: ':id', pathMatch: 'full', component: ArtistComponent}
];

@NgModule({
  declarations: [
    ArtistComponent,
    AlbumListComponent
  ],
  exports: [
    ArtistComponent,
    AlbumListComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class ArtistRoutingModule {
}
