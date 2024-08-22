import { Request, Response } from "express";
import { DesertFoodService } from "../../Services/Sobremesa/DesertFoodService";


class DesertFoodController {
    async handle(req: Request, res: Response){
        const {nome, preco, peso, quantidade, descricao} = req.body
        const desertService = new DesertFoodService()
        try {
            const foodData = {nome, preco, peso, quantidade, descricao}
            const desert = await desertService.execute(foodData)
            console.log("alimento registrado com sucesso");
            return res.status(200).json(desert)
        } catch (error) {
            console.log("erro ao registrar o alimento");
            return res.status(400).json({error: "erro ao registrar o alimento"})
        }

    }
}

export {DesertFoodController}