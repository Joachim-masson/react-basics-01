import "./App.css";
import { useState } from "react";
import PokemonCard from "./components/PokemonCard";

const pokemonList = [
	{
		name: "bulbasaur",
		imgSrc:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
	},
	{
		name: "mew",
	},
	{
		name: "Raichu",
		imgSrc:
			"https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/026.png",
	},
];

function App() {
	const [pokemonName, setPokemonName] = useState("bulbasaur");
	const pokemon = pokemonList.find((pokemon) => pokemon.name === pokemonName);

	if (pokemon == null) {
		throw new Error("Invalid pokemon name");
	}

	return (
		<div>
			<button type="button" onClick={() => setPokemonName("bulbasaur")}>
				Bulbasaur
			</button>
			<button type="button" onClick={() => setPokemonName("mew")}>
				Mew
			</button>
			<button type="button" onClick={() => setPokemonName("Raichu")}>
				Raichu
			</button>
			<PokemonCard pokemon={pokemon} />
		</div>
	);
}

export default App;
