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
  id: string;
  peliForm: FormGroup;
  url!: string;

  constructor(
      private route: ActivatedRoute,
      private peliApi: PeliculaApiService,
      formBuilder: FormBuilder,
    )
    {
      this.id = '';

      this.id = this.route.snapshot.paramMap.get('id')!;

      this.peliForm = formBuilder.group({
        name: ['', Validators.required],
        poster: ['', [Validators.required, Validators.pattern('https?://.+')]],
        director: ['', Validators.required],
        year: ['', Validators.required]
      });
    }
  handleSaveClick() {
    if (this.peliForm.valid)
    {
      console.log(this.peliForm.value);
      this.peliApi.Insert(this.peliForm.value);
    }
  }
}
