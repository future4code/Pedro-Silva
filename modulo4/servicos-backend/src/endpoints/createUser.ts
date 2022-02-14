import { Request, Response } from "express";
import { isNamedExportBindings } from "typescript";
import { connection } from "../data/connection";
import { getAddress } from "../services/getAddress";
import { mailTransporter } from "../services/mailTransporter";
import { UserInfo } from "../types/address";


export const createUser = async (
    req: Request,
    res: Response
): Promise<any> => {
    try {

        const { cep, email, number, complement } = req.body

        if (!cep || !email || !number) {
            throw new Error("Faltam parâmetros a serem passados.")
        }

        const address = await getAddress(cep)

        if (!address) {
            throw new Error("Problema no serviço de CEP")
        }

        const user: UserInfo = {
            email: email,
            number: number,
            complement: complement,
            ...address
        }

        await connection('servicos_backend').insert(user)

        const info = await mailTransporter.sendMail({
            from: `<${process.env.NODEMAILER_USER}>`,
            to: email,
            subject: "Cadastro na plataforma API",
            text: `Para gerar a seguinte mensagem precisei utilizar o objeto de user e adress para manipular os dados.
            Enviando-os através de um objeto dentro do mailTransporter, com a função sendMail().
            Segue a mensagem: 
            Olá, ${email}!
            ENDEREÇO: ${address.city}/${address.state} ${address.neighborhood}, ${address.street}, ${user.number}, ${user.complement}`,
            html: `<p>Para gerar a seguinte mensagem precisei utilizar o objeto de user e adress para manipular os dados.
            Enviando-os através de um objeto dentro do mailTransporter, com a função sendMail().
            <strong> Segue a mensagem: </strong> 
            Olá, ${email}!
            ENDEREÇO: ${address.city}/${address.state} ${address.neighborhood}, ${address.street}, ${user.number}, ${user.complement}</p>`
        })


        res.status(200).send({ info, user, message: 'Cadastro realizado com sucesso' })
    } catch (error: any) {
        res.status(400).send(error.message)

    }
}