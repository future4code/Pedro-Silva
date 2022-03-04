import { userInfo } from "os";
import { Recipe } from "../types/Recipe";
import { BaseDatabase } from "./BaseDatabase";

export class RecipeDatabase extends BaseDatabase {

    async createRecipe(recipe: Recipe) {
        try {

            await BaseDatabase.connection('cookenu_recipes')
                .insert({
                    id: recipe.getId(),
                    user_id: recipe.getUserId(),
                    title: recipe.getTitle(),
                    description: recipe.getDescription(),
                    date: recipe.getDate()
                })

        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }

    }

    async getRecipe(id: string) {
        try {
            const recipe = await BaseDatabase.connection('cookenu_recipes')
                .select('id', 'title', 'description', 'date')
                .where('id', id)

            return recipe[0]

        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

}