import "./App.css";
import { useState } from "react";
import { useEffect } from "react";
import NavBar from "./components/NavBar";
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

	useEffect(() => {
		alert("Hello pokemon trainer :)");
	});

	if (pokemon == null) {
		throw new Error("Invalid pokemon name");
	}

	return (
		<div>
			<NavBar pokemonList={pokemonList} setPokemonName={setPokemonName} />
			<PokemonCard pokemon={pokemon} />
		</div>
	);
}

export default App;
