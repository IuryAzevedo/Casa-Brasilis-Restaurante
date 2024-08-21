import { Request, Response } from "express";
import { MeatFoodService } from "../../Services/Carnes/MeatFoodService";

class MeatFoodController {
    async handle(req: Request, res: Response){
        const {nome, preco, peso, descricao} = req.body;
        const meatService = new MeatFoodService()
        try {
            const meatData = {
                nome, preco, peso, descricao
            }
            const meat = await meatService.execute(meatData)
            console.log("Carne registrada com sucesso!");
            return res.status(200).json(meat)            
        } catch (error) {
            console.log("Não foi possível registrar o alimento");
            return res.status(400).json({error: "Não foi possível registrar o alimento"})
        }
    }
}

export {MeatFoodController}