import { Request, Response } from "express";
import { RecipeDatabase } from "../data/RecipeDataBase";
import { Authenticator } from "../services/Authenticator";
import { zeroAdd } from "../services/zeroInDate";


export const getRecipeById = async (
    req: Request,
    res: Response
): Promise<void> => {
    try {
        const token = req.headers.authorization as string
        const id = req.params.id

        if (!token) {
            res.statusCode = 422
            throw new Error("Ausência de token. Deve ser inserido um token de autorização.")
        }

        const auth = new Authenticator()
        const checkToken = auth.getTokenData(token)

        if (!checkToken) {
            res.statusCode = 401
            throw new Error("Token inválido ou expirado.")
        }

        const recipeDB = new RecipeDatabase()
        const recipe = await recipeDB.getRecipe(id)
        const date = recipe.createdAt
        const outputDate = `${zeroAdd(date.getDate())}/${zeroAdd(date.getMonth() + 1)}/${date.getFullYear()}`

        const result = { ...recipe, createdAt: outputDate }

        res.status(200).send(result)

    } catch (error: any) {
        if (res.statusCode === 200) {
            res.status(500).send({ message: "Internal server error" })
        } else {
            res.send({ message: error.sqlMessage || error.message })
        }
    }
}