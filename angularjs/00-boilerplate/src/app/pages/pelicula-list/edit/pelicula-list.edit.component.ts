import { Pelicula } from "../pelicula-list.model";
import { PeliculaApiService } from "../pelicula.service";

var baseUrl = window.location.href.split("/");
var lenghtUrl = baseUrl.length;
var idUrl = +baseUrl[lenghtUrl - 1]

export class PeliculaEditController {
	pelicula: Pelicula = null;
	poster: string;
	name: string;
	year: number;
	director: string;

	constructor (private peliculaApiService: PeliculaApiService){
		"ngInject";
		this.pelicula = null;
	}
	$onInit() {
		if (baseUrl[lenghtUrl - 1] != "peliculacreate")
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
		this.pelicula.poster = poster;
		this.pelicula.name = name;
		this.pelicula.year = year;
		this.pelicula.director = director;

		if (baseUrl[lenghtUrl - 1] != "peliculacreate")
		{
			this.peliculaApiService.updatePelicula(this.pelicula).then(
				(result) => {
					console.log(result);
				}
			)
		}
		else
		{
			this.peliculaApiService.insertPelicula(this.pelicula).then(
				(result) => {
					console.log(result);
				}
			)
		}
	}
}

export const PeliculaListEditComponent = {
	template: require("./pelicula-list.edit.component.html") as string,
	controller: PeliculaEditController,
	controllerAs: "vm",
};

PeliculaEditController.$inject = ["peliculaApiService"]