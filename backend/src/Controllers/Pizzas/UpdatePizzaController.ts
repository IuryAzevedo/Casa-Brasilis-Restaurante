import { Request, Response } from "express";
import { UpdatePizzaService } from "../../Services/Pizzas/UpdatePizzaService";

class UpdatePizzaController {
    async handle(req: Request, res: Response){
        const {id, nome, descricao, preco, tamanho} = req.body;
        const updateService = new UpdatePizzaService()
        try {
            const update = await updateService.execute({
                id: String(id),
                nome, preco, descricao, tamanho
            })
            console.log('pizza atualizada com sucesso!');
            return res.status(200).json(update);
        } catch (error) {
            console.log('Não foi possível atualizar a pizza!');
            return res.status(400).json({error: 'Não foi possível atualizar a pizza!'});
        }
    }
}

export {UpdatePizzaController}