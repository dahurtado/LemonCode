import * as angular from "angular";
import { Pelicula } from "./pelicula-list.model";

export class PeliculaApiService {
	$http: angular.IHttpService = null;
	constructor($http: angular.IHttpService, private $q: angular.IQService) {
		"ngInject";
		this.$http = $http;
	}

	public getPeliculasList(): angular.IPromise<Pelicula[]> {
		const deferred = this.$q.defer<Pelicula[]>();

		this.$http.get('http://localhost:3001/movies').then(
			(result) => {
				const peliculas = result.data as Pelicula[];
				deferred.resolve(peliculas);
			}
		);

		return deferred.promise;
	}

	public updatePelicula(peli: Pelicula): angular.IPromise<Pelicula> {
		const deferred = this.$q.defer<Pelicula>();
		let idPeli = peli.id;

		this.$http.put('http://localhost:3001/movies/' + idPeli, peli).then(
			(result) => {
				const peliculaInsert = result.data as Pelicula;
				deferred.resolve(peliculaInsert);
			}
		)
		return deferred.promise;
	}

	public insertPelicula(peli: Pelicula): angular.IPromise<Pelicula> {
		const deferred = this.$q.defer<Pelicula>();

		this.$http.post('http://localhost:3001/movies/', peli).then(
			(result) => {
				const peliculaInsert = result.data as Pelicula;
				deferred.resolve(peliculaInsert);
			}
		)
		return deferred.promise;
	}

	public getPeliculaId(id: number): angular.IPromise<Pelicula> {
		const deferred = this.$q.defer<Pelicula>();

		this.$http.get('http://localhost:3001/movies/' + id).then(
			(result) => {
				const peliculas = result.data as Pelicula;
				deferred.resolve(peliculas);
			}
		);

		return deferred.promise;
	}

	public deletePelicula(id: number): angular.IPromise<Pelicula> {
		const deferred = this.$q.defer<Pelicula>();

		this.$http.get('http://localhost:3001/movies/' + id).then(
			(result) => {
				const peliculas = result.data as Pelicula;
				deferred.resolve(peliculas);
			}
		);

		return deferred.promise;
	}
}

PeliculaApiService.$inject = ["$http", "$q"];