import { Request, Response } from "express";
import { UpdateDrinksService } from "../../Services/Drinks/UpdateDrinksService";

class UpdateDrinksController {
    async handle(req: Request, res: Response){
        const {id} = req.params
        const {nome, preco, descricao} = req.body
        const updateDrinksService = new UpdateDrinksService()
        try {
            const updateDrinks = await updateDrinksService.execute({
                id: String(id),
                nome, preco, descricao
            })
            console.log('Drink atualizado com sucesso!');
            return res.status(200).json(updateDrinks)
        } catch (error) {
            console.log('Não foi possível atualizar o Drink');
            return res.status(400).json({error: 'Não foi possível atualizar o Drink'})
        }
    }
}

export {UpdateDrinksController}