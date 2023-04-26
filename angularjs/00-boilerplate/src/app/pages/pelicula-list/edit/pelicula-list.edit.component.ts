import { Pelicula } from "../pelicula-list.model";
import { PeliculaApiService } from "../pelicula.service";
import { StateParams } from "@uirouter/angularjs";


export class PeliculaEditController {
	pelicula: Pelicula = new Pelicula("", "", "", 0);

	poster: string;
	name: string;
	year: number;
	director: string;
	
	constructor
	(
		private peliculaApiService: PeliculaApiService, 
		private stateParams: StateParams
	)
	{
		"ngInject";
		this.pelicula = null;
	}
	$onInit() {
		console.log("ID: " + this.stateParams.id);
		
		if (this.stateParams.id != null)
		{
			this.peliculaApiService.getPeliculaId(this.stateParams.id).then(
				(result) => {
					this.pelicula = result;
					console.log(this.pelicula.name);
					console.log(result);
				}
			)
		}
		else
		{
			console.log("funciona");
		}
	}
	handleClick = (poster: string, name: string, year: number, director: string) => {
		
		if (this.stateParams.id != null)
		{
			this.pelicula = new Pelicula(this.poster, this.name, this.director, this.year);
			this.pelicula.id = this.stateParams.id;
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
			console.log("Poster de form: " + this.poster);
			
			this.pelicula = new Pelicula(this.poster, this.name, this.director, this.year);
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

PeliculaEditController.$inject = ["peliculaApiService", "$stateParams"]