import { Response } from "express";
import { ListDrinksService } from "../../Services/Drinks/ListDrinksService";

class ListDrinksController {
    async handle(res: Response){
        const listService = new ListDrinksService()
        try {
            const list = await listService.execute()
            console.log("sucesso ao listar Drinks");
            return res.status(200).json(list)
        } catch (error) {
            console.log("erro ao listar Drinks");
            return res.status(400).json({error: "erro ao listar Drinks"})
        }
    }
}

export {ListDrinksController}