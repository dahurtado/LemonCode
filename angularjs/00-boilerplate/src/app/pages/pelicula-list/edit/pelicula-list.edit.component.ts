import { Pelicula } from "../pelicula-list.model";
import { PeliculaApiService } from "../pelicula.service";


var baseUrl = window.location.href.split("/");
var lenghtUrl = baseUrl.length;
var idUrl = +baseUrl[lenghtUrl - 1]


export class PeliculaEditController {
	pelicula: Pelicula;
	poster: string = "";
	name: string;
	year: number;
	director: string;
	
	constructor (private peliculaApiService: PeliculaApiService){
		"ngInject";
		this.pelicula = null;
	}
	$onInit() {
		console.log(baseUrl);
		console.log(idUrl);
		console.log(lenghtUrl);
		
		if (baseUrl[lenghtUrl - 1] == 'home')
		{
			window.location.reload();
			//caches.delete();
		}
		
		if (lenghtUrl === 6)
		{
			this.peliculaApiService.getPeliculaId(idUrl).then(
				(result) => {
					this.pelicula = result;
					console.log(this.pelicula.name);
					console.log(result);
				}
			)
		}
	}
	handleClick = (poster: string, name: string, year: number, director: string) => {
		
		if (lenghtUrl === 6)
		{
			this.pelicula.poster = poster;
			this.pelicula.name = name;
			this.pelicula.year = year;
			this.pelicula.director = director;
			console.log(this.pelicula);
			this.peliculaApiService.updatePelicula(this.pelicula).then(
				(result) => {
					console.log("actu");
					window.location.replace('http://localhost:8080/#!/home');
				}
			);
		}
		else
		{
			this.pelicula.poster = poster;
			this.pelicula.name = name;
			this.pelicula.year = year;
			this.pelicula.director = director;
			console.log(this.pelicula);
			this.peliculaApiService.insertPelicula(this.pelicula).then(
				(result) => {
					console.log("insert");
					window.location.replace('http://localhost:8080/#!/home');
				}
			);
		}
	}
}

export const PeliculaListEditComponent = {
	template: require("./pelicula-list.edit.component.html") as string,
	controller: PeliculaEditController,
	controllerAs: "vm",
};

PeliculaEditController.$inject = ["peliculaApiService"]