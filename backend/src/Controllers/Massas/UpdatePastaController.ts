import { Request, Response } from "express";
import { UpdatePastaService } from "../../Services/Massas/UpdatePastaService";

class UpdatePastaController {
    async handle(req: Request, res: Response) {
        const {id} = req.params;
        const {nome, preco, peso, descricao} = req.body;
        const updateService = new UpdatePastaService();
        try {
            const update = await updateService.execute({
                id: String(id),
                nome, preco, peso, descricao
            })
            console.log('massa atualizada com sucesso!');
            return res.status(200).json(update)
        } catch (error) {
            console.log('Não foi possível atualizar a massa!');
            return res.status(400).json({error: 'Não foi possível atualizar a massa!'})
        }
    }
}

export {UpdatePastaController}