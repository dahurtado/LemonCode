import { PeliculaApiService } from "./pelicula.service"
import { Pelicula } from "./pelicula-list.model";


class PeliculaController {
	peliculaList: Pelicula[] = [];

	constructor(private peliculaApiService: PeliculaApiService){
		"ngInject";
		this.peliculaList = [];
	}

	$onInit() {
		this.peliculaApiService.getPeliculasList().then(
			(result) => {
				this.peliculaList = result;
				console.log(this.peliculaList);
			}
		);
	}
}

export const PeliculaListComponent = {
	template: require("./pelicula-list.component.html") as string,
	controller: PeliculaController,
	controllerAs: "vm",
}

PeliculaController.$inject = ["peliculaApiService"];