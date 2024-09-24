import { Request, Response } from "express";
import { UpdateDesertService } from "../../Services/Sobremesa/UpdateDesertService";

class UpdateDesertController {
    async handle(req: Request, res: Response){
        const {id, nome, descricao, preco, peso, quantidade} = req.body;
        const updateService = new UpdateDesertService()
        try {
            const update = await updateService.execute({
                id: String(id),
                nome, preco, peso, descricao, quantidade
            })
            console.log('Sobremesa atualizada com sucesso!');
                return res.status(200).json(update)
        } catch (error) {
            console.log('Não foi possível atualizar a sobremesa');
                return res.status(400).json({error: 'Não foi possível atualizar a sobremesa'})
        }
    }
}

export {UpdateDesertController}