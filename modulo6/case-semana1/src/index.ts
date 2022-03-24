import { app } from "./app";
import { PokemonController } from "./controller/PokemonController";

const pokeController = new PokemonController()

app.get('/pokemons', pokeController.getPokemons)
