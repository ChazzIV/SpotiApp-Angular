import { HttpClient } from '@angular/common/http';
import { SpotifyService } from '../../services/spotify.service';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  nuevasCanciones: any[] = [];
  loading: boolean;

  error: boolean;
  mensajeError: string ;

  constructor( private spotify: SpotifyService) {

    this.loading = true;
    this.error = false;


    this.spotify.getNewRealeases()
    .subscribe (( data: any) => {
      this.nuevasCanciones = data;
      this.loading = false;
    }, (errorServicio) => {
      this.error = true;
      this.loading = false;
      this.mensajeError = errorServicio.error.error.message;

    });
  }

  ngOnInit(): void {
  }

}
