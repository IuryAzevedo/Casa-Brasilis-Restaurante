import { Request, Response } from "express";
import { BebidasService } from "../../Services/Bebidas/BedidasService";

class BebidasController {
    async handle(req: Request, res: Response){
        const {nome, preco, litros} = req.body
        const bebidaService = new BebidasService()
        try {
            const bebidaData = {nome, preco, litros}
            const bebidas = bebidaService.execute(bebidaData)
            console.log("bebida registrada com sucesso");
            return res.status(200).json(bebidas)
        } catch (error) {
            console.log("erro ao registrar a bebida");
            return res.status(400).json({error: "erro ao registrar a bebida"})
        }
    }
}

export {BebidasController}