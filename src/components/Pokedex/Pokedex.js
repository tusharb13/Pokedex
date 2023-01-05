import React, { useState } from "react";
import { PokemonCard } from "../PokemonCard/PokemonCard";
import PokemonBackground from "../../assets/PokemonBackground.jpg";
import "./Pokedex.css";
import BounceLoader from "react-spinners/BounceLoader";

export const Pokedex = () => {
	const [pokemonName, setPokemonName] = useState("");
	const [pokemonData, setPokemonData] = useState();
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);

	const getPokemonByName = async () => {
		setLoading(true);
		const pokemonData = await fetch(
			`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`
		);
		if (pokemonData.status === 200) {
			const pokeJson = await pokemonData.json();
			setPokemonData(pokeJson);
			setLoading(false);
			setError(false);
		} else {
			setLoading(false);
			setError(true);
		}
	};

	const enterName = (event) => {
		setPokemonName(event.target.value);
	};

	const searchPokemon = () => {
		if (pokemonName !== "") {
			getPokemonByName();
			setPokemonName("");
		} else {
			alert("Pokemon name is empty");
		}
	};

	return (
		<>
			<div className="container">
				<img
					src={PokemonBackground}
					className="pokemon-img"
					alt="background"
				></img>
				<div class="centered">
					<input
						type="text"
						placeholder="Enter name of pokemon"
						value={pokemonName}
						onChange={enterName}
						className="input-search"
					/>
					<button onClick={searchPokemon} className="search-button">
						See Stats
					</button>
				</div>
				<div className="result">
					{loading ? (
						<BounceLoader
							color="#3689d6"
							loading={loading}
							size={150}
							aria-label="Loading Spinner"
							data-testid="loader"
						/>
					) : error ? (
						<div>Pokemon not found</div>
					) : !loading && !error && pokemonData ? (
						<PokemonCard pokemonData={pokemonData} />
					) : (
						<div>Enter the name of the pokemon in the input field</div>
					)}
				</div>
			</div>
		</>
	);
};
