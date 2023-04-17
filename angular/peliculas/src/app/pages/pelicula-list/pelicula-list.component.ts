import { Component } from '@angular/core';
import { Pelicula } from '@/model/pelicula.model';
import { PeliculaApiService } from '@/services/pelicula-api.service';

@Component({
  selector: 'app-pelicula-list',
  templateUrl: './pelicula-list.component.html',
  styleUrls: ['./pelicula-list.component.css']
})
export class PeliculaListComponent {
  title = 'peliculas';
  peliculas: Pelicula[];

  constructor(private peliculaApiService: PeliculaApiService) {
    this.peliculas = [];
  };

  loadPeliculas = async () => {
    this.peliculas = await this.peliculaApiService.getAll();
  };

  ngOnInit(): void {
    this.loadPeliculas();
  }
}
