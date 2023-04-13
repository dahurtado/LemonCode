import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CartaPeliculaComponent } from './carta-pelicula/carta-pelicula.component';

@NgModule({
  declarations: [
    AppComponent,
    CartaPeliculaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
