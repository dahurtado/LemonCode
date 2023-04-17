export class Pelicula
{
  id!: number;
  name: string;
  poster: string;
  director: string;
  year: number;

  constructor(name: string, poster: string, director: string, year: number) {
    this.name = name;
    this.poster = poster;
    this.director = director;
    this.year = year;
  }
}
