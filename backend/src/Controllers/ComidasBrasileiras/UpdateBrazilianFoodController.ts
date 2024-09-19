import { Request, Response } from "express";
import { UpdateBrazilianFoodService } from "../../Services/ComidasBrasileiras/UpdateBrazilianFoodService";


class UpdateBrazilianFoodController {
    async handle(req: Request, res: Response){
        const {id} = req.params
        const {nome, preco, peso, descricao} = req.body
        const updateBrazilianService = new UpdateBrazilianFoodService()
        try {
            const updateBrazilian = await updateBrazilianService.execute({
                id: String(id),
                nome, preco, peso, descricao
            })
            console.log('Comida atualizada com sucesso');
            return res.status(200).json(updateBrazilian)
        } catch (error) {
            console.log('Erro ao atualizar comida');
            return res.status(400).json({error: 'Erro ao atualizar comida'})
        }
    }
}

export {UpdateBrazilianFoodController}