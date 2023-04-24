import { Pelicula } from "../pelicula-list.model";
import { PeliculaApiService } from "../pelicula.service";

var baseUrl = window.location.href.split("/");
var lenghtUrl = baseUrl.length;

export class PeliculaEditController {
	peliculaId: Pelicula = null;
	constructor (private peliculaApiService: PeliculaApiService){
		"ngInject";
		this.peliculaId = null;
	}
	$onInit() {
		this.peliculaApiService.getPeliculaId(+baseUrl[lenghtUrl - 1]).then(
			(result) => {
				this.peliculaId = result;
				console.log(this.peliculaId);
				console.log(result);
			}
		)
	}
}

export const PeliculaListEditComponent = {
	bindings: {
		poster: "<"
	},
	template: require("./pelicula-list.edit.component.html") as string,
	controller: PeliculaEditController,
	controllerAs: "vm",
};

PeliculaEditController.$inject = ["peliculaApiService"]