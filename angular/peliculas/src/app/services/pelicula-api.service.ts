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

  getById(id: number): Observable<Pelicula>
  {
    return this.http.get<Pelicula>('http://localhost:3001/movies/' + id);
  }

  getAll() : Observable<Pelicula[]>
  {
    return this.http.get<Pelicula[]>('http://localhost:3001/movies');
  }

  Delete(id: number): Observable<Pelicula>
  {
    return this.http.delete<Pelicula>('http://localhost:3001/movies/' + id);
  }

  Update(peli: Pelicula, id: number): Observable<Pelicula>
  {
    return this.http.put<Pelicula>('http://localhost:3001/movies/' + id , peli);
  }

  Insert(peli: Pelicula): Observable<Pelicula>
  {
    return this.http.post<Pelicula>('http://localhost:3001/movies', peli);
  }
}
