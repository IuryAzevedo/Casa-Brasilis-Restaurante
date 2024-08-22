import { Request, Response } from "express";
import { DrinksService } from "../../Services/Drinks/DrinksService";

class DrinksController {
    async handle(req: Request, res: Response){
        const {nome, preco, descricao} = req.body
        const drinksService = new DrinksService()
        try {
            const drinkData = {nome, preco, descricao}
            const drink = drinksService.execute(drinkData)
            console.log("drink registrado com sucesso");
            return res.status(200).json(drink)
        } catch (error) {
            console.log("erro ao registrar o drink");
            return res.status(400).json({error: "erro ao registrar o drink"})
        }
    }
}

export {DrinksController}