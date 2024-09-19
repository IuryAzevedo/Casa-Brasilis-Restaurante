import { Response } from "express";
import { ListPizzaService } from "../../Services/Pizzas/ListPizzaService";

class ListPizzaController {
    async handle(res: Response){
        const listService = new ListPizzaService()
        try {
            const list = await listService.execute()
            console.log('sucesso ao listar pizzas');
            return res.status(200).json(list)
        } catch (error) {
            console.log("erro ao listar pizzas");
            return res.status(400).json({error: "erro ao listar pizzas"})
        }
    }
}
export {ListPizzaController}