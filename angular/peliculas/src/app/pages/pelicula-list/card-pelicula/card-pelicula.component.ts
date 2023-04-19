import { Component, Input } from '@angular/core';
import { Pelicula } from '@/model/pelicula.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-pelicula',
  templateUrl: './card-pelicula.component.html',
  styleUrls: ['./card-pelicula.component.css']
})
export class CardPeliculaComponent {
  @Input() peli!: Pelicula;

  constructor(private router: Router) {}

  handleImageClick() {
    this.router.navigate(['/edit', this.peli.id]);
  }
}
