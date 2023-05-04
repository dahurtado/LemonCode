import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

interface CallBackEntity {
	results: any[];
}


interface CharacterEntity {
	id: number;
	name: string;
	status: string;
	species: string;
	gender: string;
	imagen: string;
}


export const RicknMortyList: React.FC = () => {

	const [callResults, setResults] = React.useState<CallBackEntity>();
	const [characters, setCharacters] = React.useState<CharacterEntity[]>([]);

	let apiUrl = "https://rickandmortyapi.com/api/character/?page=1";

	const getDatos = async () => {
		await axios.get(apiUrl)
		.then(respuesta => setResults(respuesta.data))
	}
	React.useEffect(() => {
		getDatos()
	}, [])


	// React.useEffect(() => {
	// 	fetch(apiUrl)
	// 	.then((response) => response.json())
	// 	.then((json) => setResults(json));
	// }, []);

	if (callResults != null)
	{
		console.log(callResults.results);
		
		const datillos = callResults.results;
		return (
			<>
				<h2>API de Rick y Morty</h2>
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
									<>
										<tr>
											<td>
												<img src={pj.image} alt="" />
											</td>
											<td>{pj.name}</td>
											<td>{pj.gender}</td>
											<td>{pj.species}</td>
											<td>{pj.status}</td>
										</tr>
									</>
								)
							)
						}
					</tbody>
				</table>
			</>
		);
	}




};

/*

<>
			<h2>Hello from List page</h2>+{" "}


			<div className="list-user-list-container">
				<span className="list-header">Fotografia</span>
				<span className="list-header">Nombre</span>
				<span className="list-header">Especie</span>
				<span className="list-header">Estado</span>
				<span className="list-header">Genero</span>
				{characters.map((character) => (
				<>
					<img src={character.imagen} />
					<span>{character.name}</span>
					<span>{character.species}</span>
					<span>{character.status}</span>
					<span>{character.gender}</span>
					<Link to={`/detail/${character.id}`}>{character.id}</Link>
				</>
				))}
			</div>
			<Link to="/detail">Navigate to detail page</Link>
		</>

*/