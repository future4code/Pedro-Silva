import { Request, Response } from "express";
import { getData } from "../data/getTokenData";
import { getUserById } from "../data/getUserById";

export default async function getUserLog(
    req: Request,
    res: Response
): Promise<void> {
    try {

        const token = req.headers.authorization as string;

        const authenticationData = getData(token);

        const user = await getUserById(authenticationData.id);

        res.status(200).send({
            id: user.id,
            email: user.email,
        });

    } catch (error: any) {

        if (res.statusCode === 200) {
            res.status(500).send({ message: "Internal server error" })
        } else {
            res.send({ message: error.message })
        }
    }
}