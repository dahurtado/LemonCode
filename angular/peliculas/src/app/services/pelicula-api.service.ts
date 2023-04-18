import { Pelicula } from '@/model/pelicula.model';
import { Injectable } from '@angular/core';
import { peliculaMockCollection } from './pelicula-api.mock';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeliculaApiService {

  constructor(private http: HttpClient) { }

  getAll() : Observable<Pelicula[]>
  {
    return this.http.get<Pelicula[]>('http://localhost:3001/movies');
  }

  Insert(peli: Pelicula): Promise<Pelicula>
  {
    peli.id = peliculaMockCollection.length + 1;

    peliculaMockCollection.push(peli);
    return Promise.resolve(peli);
  }
}
