import { Component } from '@angular/core';
import {AuthService} from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Sportify: Your best alternative for finding music';
  constructor(public authService: AuthService) {}

  logout(): boolean {
    this.authService.logout();
    return false;
  }
}
