import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pelicula } from '@/model/pelicula.model';
import { PeliculaApiService } from '@/services/pelicula-api.service';
import { NgForm, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-pelicula-edit',
  templateUrl: './pelicula-edit.component.html',
  styleUrls: ['./pelicula-edit.component.css']
})
export class PeliculaEditComponent {
  id: string;
  peliForm: FormGroup;

  peliculaEdit: any;
  idEdit: number;

  constructor
  (
    private route: ActivatedRoute,
    private peliApi: PeliculaApiService,
    formBuilder: FormBuilder,
  )
  {
    this.id = this.route.snapshot.paramMap.get('id')!;
    this.idEdit = +this.id;

    this.peliApi.getId(this.idEdit).subscribe(data => {this.peliculaEdit = data});

    console.log(this.id);

    this.peliForm = formBuilder.group({
      id: this.idEdit,
      name: ['', Validators.required],
      poster: ['', [Validators.required, Validators.pattern('https?://.+')]],
      director: ['', Validators.required],
      year: ['', Validators.required]
    });
  }

  returnPelicula()
  {
    console.log(this.peliculaEdit);
  }

  handleSaveClick()
  {
    if (this.peliForm.valid)
    {
      const peli = this.peliForm.value;
      console.log(this.peliForm.value);

      if (this.id == null)
      {
        this.peliApi.Insert(peli).subscribe({
          next: (peli) => {
            console.log(peli);
          },
          error: (peli) => {
            console.log(peli);
          },
        });
      }
      else
      {
        this.peliApi.Update(peli, this.idEdit).subscribe({
          next: (peli) => {
            console.log(peli);
          },
          error: (peli) => {
            console.log(peli);
          },
        });
      }
    }
  }
}
