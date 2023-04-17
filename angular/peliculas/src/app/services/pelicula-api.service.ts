import { Pelicula } from '@/model/pelicula.model';
import { Injectable } from '@angular/core';
import { peliculaMockCollection } from './pelicula-api.mock';

@Injectable({
  providedIn: 'root'
})
export class PeliculaApiService {

  constructor() { }

  getAll() : Promise<Pelicula[]>
  {
    return Promise.resolve(peliculaMockCollection);
  }

  Insert(peli: Pelicula): Promise<Pelicula>
  {
    peli.id = peliculaMockCollection.length + 1;

    peliculaMockCollection.push(peli);
    return Promise.resolve(peli);
  }
}
