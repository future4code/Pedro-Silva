import { app } from "./app";
import { PokemonController } from "./controller/PokemonController";

const pokeController = new PokemonController()

app.get('/pokemons', pokeController.getPokemons)
app.get('/pokemons/legendary', pokeController.getLegendaryPokemons)
app.get('/pokemons/pokemon', pokeController.getPokemonByName)
app.get('/pokemons/types', pokeController.getPokemonsByType)
app.get('/pokemons/:generation', pokeController.getPokemonsByGeneration)
app.get('/pokemons/pokedex/:pokedexNumber', pokeController.getPokemonByPokedexNum)
