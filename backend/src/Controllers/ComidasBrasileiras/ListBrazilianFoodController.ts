import { Request, Response } from "express";
import { ListBebidasService } from "../../Services/Bebidas/ListBebidasService";
import { ListBrazilianFoodService } from "../../Services/ComidasBrasileiras/ListBrazilianFood";

class ListBrazilianFoodController {
    async handle(req: Request, res: Response ){
        const listService = new ListBrazilianFoodService()
        try {
            const list = await listService.execute()
            console.log("sucesso ao listar comidas brasileiras", list);
            return res.status(200).json(list)
        } catch (error) {
            console.log("erro ao listar comidas brasileiras");
            return res.status(400).json({error: "erro ao listar comidas brasileiras"})
        }
    }
}

export {ListBrazilianFoodController}