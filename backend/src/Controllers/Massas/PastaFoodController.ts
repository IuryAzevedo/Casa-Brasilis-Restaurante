import { Request, Response } from "express";
import { PastaFoodService } from "../../Services/Massas/PastaFoodService";

class PastaFoodController {
    async handle(req: Request, res: Response){
        const {nome, preco, peso, descricao} = req.body
        const pastaService = new PastaFoodService()
        try {
            const foodData = {
                nome, preco, peso, descricao
            }
            const pasta = await pastaService.execute(foodData)
            console.log("Massa registrada com sucesso!");
            return res.status(200).json(pasta)
        } catch (error) {
            console.log("Comida não cadastrada, algo deu errado!");
            return res.status(400).json({error: 'Comida não cadastrada, algo deu errado!'})
        }
    }
}

export {PastaFoodController}