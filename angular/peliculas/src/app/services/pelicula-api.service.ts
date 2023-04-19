import { Pelicula } from '@/model/pelicula.model';
import { Injectable } from '@angular/core';
import { peliculaMockCollection } from './pelicula-api.mock';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeliculaApiService {

  constructor(private http: HttpClient) { }

  getId(id: number): Observable<Pelicula>
  {
    return this.http.get<Pelicula>('http://localhost:3001/movies/' + id);
  }

  getAll() : Observable<Pelicula[]>
  {
    return this.http.get<Pelicula[]>('http://localhost:3001/movies');
  }

  Update(peli: Pelicula, id: number): Observable<Pelicula>
  {
    return this.http.put<Pelicula>('http://localhost:3001/movies/' + id , peli);
  }

  Insert(peli: Pelicula): Observable<Pelicula>
  {
    peli.id += 1;

    return this.http.post<Pelicula>('http://localhost:3001/movies', peli);
  }
}
