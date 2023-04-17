import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CardPeliculaComponent } from './pages/pelicula-list/card-pelicula/card-pelicula.component';
import { PeliculaListComponent } from './pages/pelicula-list/pelicula-list.component';
import { PeliculaEditComponent } from './pages/pelicula-edit/pelicula-edit.component';
import { FormsModule } from '@angular/forms';

const appRoutes : Routes = [
  {path: '', component: PeliculaListComponent},
  {path: 'edit/:id', component: PeliculaEditComponent},
  {path: 'edit', component: PeliculaEditComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    CardPeliculaComponent,
    PeliculaListComponent,
    PeliculaEditComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
