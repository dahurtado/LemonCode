import { Component, Input } from '@angular/core';
import { Pelicula } from '../model/pelicula.model';

@Component({
  selector: 'app-carta-pelicula',
  templateUrl: './carta-pelicula.component.html',
  styleUrls: ['./carta-pelicula.component.css']
})
export class CartaPeliculaComponent {
  @Input() pelicula!: Pelicula;
}
