import { Request, Response } from "express";
import { RecipeDatabase } from "../data/RecipeDataBase";
import { Authenticator } from "../services/Authenticator";
import { IdGenerator } from "../services/IdGenerator";
import { Recipe } from "../types/Recipe";


export const createRecipe = async (
    req: Request,
    res: Response
): Promise<void> => {
    try {
        const token = req.headers.authorization as string
        const { title, description } = req.body

        const auth = new Authenticator()
        const checkToken = auth.getTokenData(token)
        const userCreator = checkToken.id

        const idGen = new IdGenerator()
        const id = idGen.generate()

        const date: Date = new Date()
        const created_date = `${date.getFullYear()}-${(date.getMonth() + 1)}-${date.getDate()}`

        const recipe = new Recipe(
            id,
            userCreator,
            title,
            description,
            created_date
        )

        const recipeDB = new RecipeDatabase()
        await recipeDB.createRecipe(recipe)


        res.status(200).send({ message: 'Receita criada.' })
    } catch (error: any) {
        if (res.statusCode === 200) {
            res.status(500).send({ message: "Internal server error" })
        } else {
            res.send({ message: error.sqlMessage || error.message })
        }
    }
}