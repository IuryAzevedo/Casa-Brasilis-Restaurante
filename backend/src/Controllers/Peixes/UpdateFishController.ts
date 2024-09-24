import { Request, Response } from "express";
import { UpdateFishService } from "../../Services/Peixes/UpdateFishService";

class UpdateFishController {
    async handle(req: Request, res: Response){
        const {id, nome, descricao, preco, peso} = req.body
        const updateService = new UpdateFishService()
        try {
            const update = await updateService.execute({
                id: String(id),
                nome, preco, peso, descricao
            })
            console.log('Peixe atualizado com sucesso!');
            return res.status(200).json(update)
        } catch (error) {
            console.log('Não foi possível atualizar o alimento');
            return res.status(400).json({erro: 'Não foi possível atualizar o alimento'})
        }
    }
}

export {UpdateFishController}