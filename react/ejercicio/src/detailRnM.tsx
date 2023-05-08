import React from "react";
import { Link, useParams } from "react-router-dom";
import SettingsAccessibilityIcon from '@mui/icons-material/SettingsAccessibility';
import HomeIcon from '@mui/icons-material/Home';

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
				<h2>Pagina de personaje <SettingsAccessibilityIcon/></h2>
				<header>
					<Link to="/"><HomeIcon fontSize="small"/>Pagina Principal</Link>
					<Link to="/rick&morty/1">Volver a lista de Rick y Morty</Link>
				</header>

				<main>
					<img src={datos.image} alt="" />
					<article>
						<table>
							<caption>Datos del personaje</caption>
							<tbody>
								<tr>
									<th>Nombre</th>
									<td>{datos.name}</td>
								</tr>
								<tr>
									<th>Genero</th>
									<td>{datos.gender}</td>
								</tr>
								<tr>
									<th>Especie</th>
									<td>{datos.species}</td>
								</tr>
								<tr>
									<th>Tipo</th>
									<td>
										{datos.type == "" ? "Desconocido" : datos.type}
									</td>
								</tr>
								<tr>
									<th>Estado</th>
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
