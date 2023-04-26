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
		if (this.stateParams.id != null)
		{
			this.peliculaApiService.getPeliculaId(this.stateParams.id).then(
				(result) => {
					this.pelicula = result;
				}
			)
		}
	}
	handleClick = (poster: string, name: string, year: number, director: string) => {
		
		if (this.stateParams.id != null)
		{
			this.pelicula = new Pelicula(this.poster, this.name, this.director, this.year);
			this.pelicula.id = this.stateParams.id;
			this.peliculaApiService.updatePelicula(this.pelicula).then(
				(result) => {
					window.location.replace('http://localhost:8080/#!/home');
				}
			);
		}
		else
		{			
			this.pelicula = new Pelicula(this.poster, this.name, this.director, this.year);
			this.peliculaApiService.insertPelicula(this.pelicula).then(
				(result) => {
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