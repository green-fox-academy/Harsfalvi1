import { Pokemon } from "./Pokemon";

let pokemonOfAsh: Pokemon[] = initializePokemon();

// Every pokemon has a name and a type.
// Certain types are effective against others, e.g. water is effective against fire.

// Ash has a few pokemon.
// A wild pokemon appeared!

let wildPokemon: Pokemon = new Pokemon("Oddish", "grass", "water");

// Which pokemon should Ash use?

// Implement the following `chooseEffective` function which will choose the most effective pokemon for Ash

function chooseEffective(
  pokemonList: Pokemon[],
  enemyPokemon: Pokemon
): string {
  for (
    let pokemonCounter = 0;
    pokemonCounter < pokemonList.length;
    pokemonCounter++
  ) {
    if (enemyPokemon.type === pokemonList[pokemonCounter].effectiveAgainst) {
      return pokemonList[pokemonCounter].name;
    }
  }
  return "";
}

console.log(`I choose you!, ${chooseEffective(pokemonOfAsh, wildPokemon)}`);

function initializePokemon(): Pokemon[] {
  return [
    new Pokemon("Bulbasaur", "grass", "water"),
    new Pokemon("Pikachu", "electric", "water"),
    new Pokemon("Charizard", "fire", "grass"),
    new Pokemon("Pidgeot", "flying", "fighting"),
    new Pokemon("Kingler", "water", "fire"),
  ];
}
