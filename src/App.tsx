import "./App.css";

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
	return (
		<div>
			<PokemonCard pokemon={pokemonList[0]} />
		</div>
	);
}

export default App;
