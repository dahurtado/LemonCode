export class Pelicula
{
  id: Number;
  name: string;
  poster: string;
  director: string;
  year: Number;

  constructor(id: Number, name: string, poster: string, director: string, year: Number) {
    this.id = id;
    this.name = name;
    this.poster = poster;
    this.director = director;
    this.year = year;
  }
}
