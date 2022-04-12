import { BaseDatabase } from "./data/BaseDatabase";

class CreateTable extends BaseDatabase {

    create = async () => {
        await BaseDatabase.connection.raw(`
         CREATE TABLE IF NOT EXISTS PokemonGo (
           Row INT(11),
           name TEXT,
           pokedex_num INT(11) 
           generation INT(11) 
           stage_evolution TEXT 
           family TEXT 
           type_1 TEXT 
           type_2 TEXT 
           weather_1 TEXT 
           weather_2 TEXT 
           status_total INT(11) 
           attack INT(11) 
           defense INT(11) 
           stamina INT(11) 
           legendary INT(11) 
           shiny INT(11) 
         );
        `)
    }
}

const createTable = new CreateTable()
createTable.create()