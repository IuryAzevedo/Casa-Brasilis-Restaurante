import { Request, Response } from "express"
import { UpdateBebidasService } from "../../Services/Bebidas/UpdateBebidasService";

class UpdateBebidasController {
    async handle(req: Request, res: Response){
        const { id } = req.params;
        const { nome, preco, litros } = req.body;
        const updateBebidasService = new UpdateBebidasService()
        try {
            const updateBebida = await updateBebidasService.execute({
                id: String(id),
                nome,
                preco,
                litros
            })
            console.log('Bebida atualizada com sucesso!');
            return res.status(200).json(updateBebida)
        } catch (error) {
            console.log('Erro ao atualizar bebida');
            return res.status(400).json({error: "Erro ao atualizar bebida"})
        }
    }
}

export {UpdateBebidasController}