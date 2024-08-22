import { Request, Response } from "express";
import { EntryFoodService } from "../../Services/Entradas/EntryFoodService";

class EntryFoodController {
    async handle(req: Request, res: Response){
        const {nome, preco, peso, quantidade, descricao} = req.body
        const entryService = new EntryFoodService()
        try {
            const foodData ={
                nome, preco, peso, quantidade, descricao
            }
            const entry = entryService.execute(foodData)
            console.log('alimento reguistrado com sucesso');
            return res.status(200).json(entry)
        } catch (error) {
            console.log("algo deu errado ao registrar o alimento");
            return res.status(400).json({error: "algo deu errado ao registrar o alimento"})
        }
    }
}

export {EntryFoodController}