import { Component, Input } from '@angular/core';
import { Pelicula } from '@/model/pelicula.model';
import { Router } from '@angular/router';
import { PeliculaApiService } from '@/services/pelicula-api.service';

@Component({
  selector: 'app-card-pelicula',
  templateUrl: './card-pelicula.component.html',
  styleUrls: ['./card-pelicula.component.css']
})
export class CardPeliculaComponent {
  @Input() peli!: Pelicula;

  constructor(private router: Router, private peliApi: PeliculaApiService) {}

  handleImageClick() {
    this.router.navigate(['/edit', this.peli.id]);
  }

  deletePelicula()
  {
    this.peliApi.Delete(this.peli.id).subscribe(peli => peli);
    window.location.replace('http://localhost:4200/');
  }
}
