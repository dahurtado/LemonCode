import React from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

interface CallBackEntity {
	results: any[];
}

export const RicknMortyList: React.FC = () => {

	const [callResults, setResults] = React.useState<CallBackEntity>();
	
	const [busqueda, setBusqueda] = React.useState("");

	const {id} = useParams();
	let idPagina = +id;
	++idPagina;

	let apiUrl = "https://rickandmortyapi.com/api/character/?page=" + id;

	const getDatos = async () => {
		await axios.get(apiUrl)
		.then(respuesta => setResults(respuesta.data))
	};

	React.useEffect(() => {
		getDatos()
	}, []);

	if (callResults != null)
	{
		console.log();
		
		const datillos = callResults.results;


		if (idPagina - 2 < 1)
		{
			return (
				<>
					<h2>API de Rick y Morty</h2>

					
					<header>
						<button>
							<Link to={"/"}>Pagina principal</Link>
						</button>
						<button>
							<a href={"/rick&morty/" + (idPagina)}>Siguiente pagina</a>
						</button>
					</header>
					<table>
						<thead>
							<tr>
								<th>Foto</th>
								<th>Nombre</th>
								<th>Genero</th>
								<th>Especie</th>
								<th>Estado</th>
							</tr>
						</thead>
						<tbody>
							{
								datillos.map
								(
									(pj) => 
									(
										<tr key={pj.id}>
											<td>
												<Link to={`/detailRnM/${pj.id}`}>
												<img src={pj.image} alt="" />
												</Link>
											</td>
											<td>{pj.name}</td>
											<td>{pj.gender}</td>
											<td>{pj.species}</td>
											<td>{pj.status}</td>
										</tr>
									)
								)
							}
						</tbody>
					</table>
				</>
			);
		}
		else
		{
			return (
				<>
					<h2>API de Rick y Morty</h2>
					<header>
						<button>
							<Link to={"/"}>Pagina principal</Link>
						</button>
						<button>
							<a href={"/rick&morty/" + (idPagina - 2)}>Anterior pagina</a>
						</button>
						<button>
							<a href={"/rick&morty/" + (idPagina)}>Siguiente pagina</a>
						</button>
					</header>
					<table>
						<thead>
							<tr>
								<th>Foto</th>
								<th>Nombre</th>
								<th>Genero</th>
								<th>Especie</th>
								<th>Estado</th>
							</tr>
						</thead>
						<tbody>
							{
								datillos.map
								(
									(pj) => 
									(
										<tr key={pj.id}>
											<td>
												<Link to={`/detailRnM/${pj.id}`}>
												<img src={pj.image} alt="" />
												</Link>
											</td>
											<td>{pj.name}</td>
											<td>{pj.gender}</td>
											<td>{pj.species}</td>
											<td>{pj.status}</td>
										</tr>
									)
								)
							}
						</tbody>
					</table>
				</>
			);
		}
	}
};
