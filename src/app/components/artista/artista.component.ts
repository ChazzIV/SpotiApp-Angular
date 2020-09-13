import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: [
  ]
})
export class ArtistaComponent implements OnInit {

  artista: any = {};
  loading: boolean;

  topTracks: any[] = [];

  constructor(private activatedRouter: ActivatedRoute,
              private spotify: SpotifyService) {

    this.activatedRouter.params.subscribe( params  => {
      console.log(params);
      this.getArtista( params ['id']);
      this.getTopTracks( params ['id']);
    })
  }

  ngOnInit(): void {
  }


  getArtista( id: string): any {
    this.loading = true;
    this.spotify.getArtista( id )
        .subscribe( artista => {
          console.log(artista);
          this.artista = artista;
          this.loading = false;
        })
  }

  getTopTracks( id: string): void {
    this.spotify.getTopTracks( id )
        .subscribe( topTracks => {
          this.topTracks = topTracks;
          console.log( topTracks);

        });
  }

}
