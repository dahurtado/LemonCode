import { PeliculaApiService } from "../pelicula.service";

export class PeliculaCardController {
	idPeli: number;

	constructor (private peliculaApiService: PeliculaApiService)
	{
		"ngInject";
		this.idPeli = 0;
	}
	borrarPelicula = (id: number) => {
		this.idPeli = id;
		this.peliculaApiService.deletePelicula(this.idPeli).then(
			(result) => {
				window.location.reload();
			}
		)
	}
}

export const PeliculaListCardComponent = {
	bindings: {
		id: "<",
		poster: "<",
		name: "<",
		year: "<",
		director: "<"
	},
	template: require("./pelicula-list-card.component.html"),
	controller: PeliculaCardController,
	controllerAs: "vm",
};

PeliculaCardController.$inject = ["peliculaApiService"];