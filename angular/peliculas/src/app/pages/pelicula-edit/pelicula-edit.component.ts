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

  constructor
  (
    private route: ActivatedRoute,
    private peliApi: PeliculaApiService,
    formBuilder: FormBuilder,
  )
  {
    this.idRuta = this.route.snapshot.paramMap.get('id')!;

    if (this.idRuta != null)
    {
      this.peliApi.getById(+this.idRuta).subscribe(data => {this.peliculaEdit = data});
    }

    this.peliForm = formBuilder.group({
      name: ['', Validators.required],
      poster: ['', [Validators.required, Validators.pattern('https?://.+')]],
      director: ['', Validators.required],
      year: [0, Validators.required]
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
        return +this.peliculaEdit.year;
      }
      case "director":
      {
        return this.peliculaEdit.director;
      }
    }
  }

  handleSaveClick()
  {
    if (this.peliForm.valid == true)
    {
      this.peliculaEdit = this.peliForm.value;
      if (this.peliculaEdit.year < 1920)
      {
        this.peliculaEdit.year = 1920;
      }
      if (this.peliculaEdit.year > 2024)
      {
        this.peliculaEdit.year = 2024;
      }

      if (this.idRuta == null)
      {
        this.peliApi.Insert(this.peliculaEdit).subscribe({
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
        this.peliApi.Update(this.peliculaEdit, +this.idRuta).subscribe({
          next: (peli) => {
            window.location.replace('http://localhost:4200/');
          },
          error: (peli) => {
            window.location.replace('http://localhost:4200/');
          },
        });
      }
    }
    else {
     alert("Debes modificar todos los campos!");
    }
  }
}
