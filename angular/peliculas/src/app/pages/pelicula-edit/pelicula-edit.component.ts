import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pelicula } from '@/model/pelicula.model';
import { PeliculaApiService } from '@/services/pelicula-api.service';
import { NgForm, FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-pelicula-edit',
  templateUrl: './pelicula-edit.component.html',
  styleUrls: ['./pelicula-edit.component.css']
})
export class PeliculaEditComponent {
  idRuta: string;
  peliForm: FormGroup;

  peliculaEdit: Pelicula = new Pelicula('','','',0);
  idEdit: number;

  peliculas: Pelicula[];

  constructor
  (
    private route: ActivatedRoute,
    private peliApi: PeliculaApiService,
    formBuilder: FormBuilder,
  )
  {
    this.idRuta = this.route.snapshot.paramMap.get('id')!;
    this.idEdit = +this.idRuta;

    this.peliculas = [];
    this.peliApi.getAll().subscribe((peliculas) => (this.peliculas = peliculas));

    if (this.idRuta != null)
    {
      this.peliApi.getById(this.idEdit).subscribe(data => {this.peliculaEdit = data});
    }

    this.peliForm = formBuilder.group({
      id: this.idEdit,
      name: ['', Validators.required],
      poster: ['', [Validators.required, Validators.pattern('https?://.+')]],
      director: ['', Validators.required],
      year: ['', Validators.required]
    });

  }

  returnPelicula(valor: string) : any
  {
    switch (valor) {
      case "poster":
      {
        return this.peliculaEdit.poster;
      }
      case "name":
      {
        return this.peliculaEdit.name;
      }
      case "year":
      {
        return this.peliculaEdit.year;
      }
      case "director":
      {
        return this.peliculaEdit.director;
      }
    }
  }

  handleSaveClick()
  {
    if (this.peliForm.valid)
    {
      const peli = this.peliForm.value;

      if (this.idRuta == null)
      {
        let posicion = this.peliculas.length - 1;
        let idNuevo = this.peliculas[posicion].id;
        peli.id = idNuevo;

        this.peliApi.Insert(peli).subscribe({
          next: (peli) => {
            window.location.replace('http://localhost:4200/');
          },
          error: (peli) => {
            window.location.replace('http://localhost:4200/');
          },
        });
      }
      else
      {
        this.peliApi.Update(peli, this.idEdit).subscribe({
          next: (peli) => {
            window.location.replace('http://localhost:4200/');
          },
          error: (peli) => {
            window.location.replace('http://localhost:4200/');
          },
        });
      }
    }
  }
}
