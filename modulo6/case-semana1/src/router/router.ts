import express from 'express';
import { PokemonController } from '../controller/PokemonController';

export const pokemonRouter = express.Router()

const pokeController = new PokemonController()

pokemonRouter.get('/', pokeController.getPokemons)
pokemonRouter.get('/legendary', pokeController.getLegendaryPokemons)
pokemonRouter.get('/pokemon', pokeController.getPokemonByName)
pokemonRouter.get('/types', pokeController.getPokemonsByType)
pokemonRouter.get('/generation/:gen', pokeController.getPokemonsByGeneration)
pokemonRouter.get('/pokedex/:pokedexNumber', pokeController.getPokemonByPokedexNum)

