import React from "react";
import { Link, useParams } from "react-router-dom";

interface CharacterEntity {
	
	name: string;
	status: string
	species: string;
	type: string;
	gender: string;
	image: string;
	episode: string[];
}

export const DetailPageRnM: React.FC = () => {
	const {id} = useParams();
	const [datos, setCharData] = React.useState<CharacterEntity>();

	let apiUrl = "https://rickandmortyapi.com/api/character/" + id;
	
	React.useEffect(() => {
		const llamarApi = async () => {
		  const respuesta = await fetch(apiUrl);
		  const charData = await respuesta.json();
		  if (charData != 'undefined') {
			setCharData(charData);
		  }
		};
		llamarApi();
	  }, []);

	
	if (datos != null)
	{
		
		return (
			<>
				<header>
					<h2>Hello from RnM Detail page</h2>
					<h3>User Id: {id}</h3>
					<p>
						<Link to="/rick&morty">Volver a lista de Rick y Morty</Link>
					</p>
					<p>
						<Link to="/">Pagina Principal</Link>
					</p>
				</header>

				<main>
					<img src={datos.image} alt="" />
					<article>
						<table>
							<caption>Datos del personaje</caption>
							<tbody>
								<tr>
									<td>Nombre</td>
									<td>{datos.name}</td>
								</tr>
								<tr>
									<td>Genero</td>
									<td>{datos.gender}</td>
								</tr>
								<tr>
									<td>Especie</td>
									<td>{datos.species}</td>
								</tr>
								<tr>
									<td>Tipo</td>
									<td>
										{datos.type == "" ? "Desconocido" : datos.type}
									</td>
								</tr>
								<tr>
									<td>Estado</td>
									<td>{datos.status}</td>
								</tr>
							</tbody>
						</table>
					</article>
					<article>
						<h4>
							Listado de episodios en los que {datos.name} aparece:
						</h4>
						<ul>
							{datos.episode.map((episodio) => (
								<li key={episodio.split("/").at(length - 1)}>
									<a href={episodio} target="_blank">
										Episodio {episodio.split("/").at(length - 1)}
									</a>
								</li>
							))}
						</ul>
					</article>
				</main>
			</>
		);
	}
};
