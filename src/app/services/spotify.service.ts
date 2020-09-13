import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {



  constructor( private http: HttpClient) {
    console.log('spotify service listo');
   }

   getQuery( query: string): any {
    const url = `https://api.spotify.com/v1/${ query }`;

    const headers = new HttpHeaders({
      Authorization: 'Bearer BQDC6hT73V4JYc5OvGpRLI4uearlzKXPZCtCw2OZedKYwRNOosmwKjvq9L-JDmjIGIAe1tSSmjllW_tQP9c'
    });

    return this.http.get(url, {headers});

   }

   getNewRealeases(): any{
     return this.getQuery('browse/new-releases?limit=20')
              .pipe( map( data => {
                return data['albums'].items;
              }));
   }


  // tslint:disable-next-line: typedef
  getArtistas(termino: string) {
    return this.getQuery(`search?q=${ termino } &type=artist&limit=15`)
              .pipe( map( data => data['artists'].items));
  }

  // tslint:disable-next-line: typedef
  getArtista( id: string) {
    return this.getQuery(`artists/${id}`);
            //  .pipe( map( data => data['artists'].items));
  }


  // tslint:disable-next-line: typedef
  getTopTracks( id: string) {
    return this.getQuery(`artists/${id}/top-tracks?country=us`)
            .pipe( map( data => data['tracks']));
  }
}



