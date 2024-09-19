import { Request, Response } from "express";
import { UpdateEntryService } from "../../Services/Entradas/UpdateEntryService";

class UpdateEntryController {
    async handle(req: Request, res: Response){
        const {id} = req.params
        const {nome, preco, descricao, quantidade, peso} = req.body
        const updateService = new UpdateEntryService()
        try {
            const update = await updateService.execute({
                id: String(id),
                nome, preco, descricao, quantidade, peso
            })
            console.log('Entrada atualizada com sucesso!');
            return res.status(200).json(update)
        } catch (error) {
            console.log('Não foi possível atualizar a entrada');
            return res.status(400).json({error: 'Não foi possível atualizar a entrada'})
        }
    }
}

export {UpdateEntryController}