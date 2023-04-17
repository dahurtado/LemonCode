import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pelicula } from '@/model/pelicula.model';
import { PeliculaApiService } from '@/services/pelicula-api.service';


@Component({
  selector: 'app-pelicula-edit',
  templateUrl: './pelicula-edit.component.html',
  styleUrls: ['./pelicula-edit.component.css']
})
export class PeliculaEditComponent {
  id: string;
  peli: Pelicula;

  constructor(private route: ActivatedRoute, private peliApi: PeliculaApiService) {
    this.id = '';
    this.peli = new Pelicula("","","",0);

    this.id = this.route.snapshot.paramMap.get('id')!;
  }
  handleSaveClick() {
    console.log(this.peli);
    this.peliApi.Insert(this.peli);
  }
}
