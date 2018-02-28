import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
import {BehaviorSubject} from 'rxjs/Rx';
import {HttpClient, HttpHeaders} from '@angular/common/http';

/**
 * SpotifyService works querying the Spotify Web API
 * https://developer.spotify.com/web-api/
 */

@Injectable()
export class SpotifyService {
  static BASE_URL = 'https://api.spotify.com/v1';
  static TOKEN_URL = 'https://accounts.spotify.com/api/token';
  static CLIENT_ID = 'ADD_TOKEN_HERE';
  static CLIENT_SECRET = 'ADD_SECRET_HERE';
  public token = '';
  public tokenSubject = new BehaviorSubject<String>('');

  constructor(private httpClient: HttpClient) {
    // We require to request the token for accessing the API
    this.getToken().subscribe((value) => {
      this.token = value['access_token'];
      this.tokenSubject.next(value['access_token']);
    });
  }

  getToken(): Observable<Object> {
    const authorization_payload = btoa(`${SpotifyService.CLIENT_ID}:${SpotifyService.CLIENT_SECRET}`);
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: `Basic ${authorization_payload}`
    });
    const url = `${SpotifyService.TOKEN_URL}?grant_type=client_credentials`;
    return this.httpClient.post(url, '', {headers}).retry(2).map((res: any) => res);
  }

  query(URL: string, params?: Array<string>): Observable<any[]> {
    let queryURL = `${SpotifyService.BASE_URL}${URL}`;
    if (params) {
      queryURL = `${queryURL}?${params.join('&')}`;
    }
    const headers = this.getHeader();
    return this.httpClient.get(queryURL, {headers}).map((res: any) => res);
  }

  getHeader(): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.token}`
    });
  }

  search(query: string, type: string): Observable<any[]> {
    return this.query(`/search`, [
      `q=${query}`,
      `type=${type}`
    ]);
  }

  searchTrack(query: string): Observable<any[]> {
    return this.search(query, 'track');
  }

  getTrack(id: string): Observable<any[]> {
    return this.query(`/tracks/${id}`);
  }

  getArtist(id: string): Observable<any[]> {
    return this.query(`/artists/${id}`);
  }

  getArtistAlbumList(id: string): Observable<any[]> {
    return this.query(`/artists/${id}/albums`, ['limit=50', 'album_type=album', 'market=ES']);
  }

  getAlbum(id: string): Observable<any[]> {
    return this.query(`/albums/${id}`);
  }
}

export const SPOTIFY_PROVIDERS: Array<any> = [
  {provide: SpotifyService, useClass: SpotifyService}
];
