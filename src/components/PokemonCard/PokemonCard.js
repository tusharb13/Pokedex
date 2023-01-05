import React from "react";
import "./PokemonCard.css";

export const PokemonCard = ({ pokemonData }) => {
	const getAbilities = () => {
		let abilities = [];
		pokemonData.abilities.map((abil) =>
			abilities.push(
				abil.ability.name[0].toUpperCase() + abil.ability.name.substring(1)
			)
		);
		return abilities.join(", ");
	};

	const getHeldItems = () => {
		let heldItems = [];
		pokemonData.held_items.map((items) =>
			heldItems.push(
				items.item.name[0].toUpperCase() + items.item.name.substring(1)
			)
		);
		return heldItems.join(", ");
	};
	return (
		<>
			<div className="card">
				<img
					src={pokemonData.sprites["front_default"]}
					alt={pokemonData.name}
					className="image"
				/>
				<div className="card-data">
					<h4>
						<b>{pokemonData.name.toUpperCase()}</b>
					</h4>
					<table>
						<tr>
							<th>Type: </th>
							<td>
								{pokemonData.types[0].type.name[0].toUpperCase() +
									pokemonData.types[0].type.name.substring(1)}
							</td>
						</tr>
						<tr>
							<th>Abilities: </th>
							<td>{getAbilities()}</td>
						</tr>
						<tr>
							<th>Weight: </th>
							<td>{pokemonData.weight}lbs</td>
						</tr>
						<tr>
							<th>Height: </th>
							<td>{pokemonData.height}"</td>
						</tr>
						<tr>
							<th>Battles won: </th>
							<td>{pokemonData.base_experience}</td>
						</tr>
						<tr>
							<th>Held items: </th>
							<td>{getHeldItems()}</td>
						</tr>
					</table>
				</div>
			</div>
		</>
	);
};
