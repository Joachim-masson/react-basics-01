interface Pokemon {
	name: string;
	imgSrc?: string;
}

interface NavBarProps {
	setPokemonName: (name: string) => void;
	pokemonList: Pokemon[];
}

function NavBar({ pokemonList, setPokemonName }: NavBarProps) {
	return (
		<>
			<nav>Hello World!</nav>
			{pokemonList.map((element) => (
				<button
					type="button"
					key={element.name}
					onClick={() => {
						setPokemonName(element.name);
						element.name === "pikachu" ? alert("pika pikachu !!!") : null;
					}}
				>
					{element.name}
				</button>
			))}
		</>
	);
}

export default NavBar;
