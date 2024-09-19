import { Response } from "express";
import { ListBebidasService } from "../../Services/Bebidas/ListBebidasService";

class ListBrazilianFoodController {
    async handle(res: Response){
        const listService = new ListBebidasService()
        try {
            const list = await listService.execute()
            console.log("sucesso ao listar comidas brasileiras");
            return res.status(200).json(list)
        } catch (error) {
            console.log("erro ao listar comidas brasileiras");
            return res.status(400).json({error: "erro ao listar comidas brasileiras"})
        }
    }
}

export {ListBrazilianFoodController}