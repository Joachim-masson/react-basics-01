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
	{
		name: "charmander",
		imgSrc:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
	},
	{
		name: "squirtle",
		imgSrc:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
	},
	{
		name: "pikachu",
		imgSrc:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
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
			<nav>
				{pokemonList.map((element) => (
					<button
						type="button"
						key={element.name}
						onClick={() => setPokemonName(element.name)}
					>
						{element.name}
					</button>
				))}
			</nav>
			<PokemonCard pokemon={pokemon} />
		</div>
	);
}

export default App;
