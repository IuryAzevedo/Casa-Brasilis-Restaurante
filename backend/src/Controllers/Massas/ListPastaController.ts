import { Response } from "express";
import { ListPastaService } from "../../Services/Massas/ListPastaService";


class ListPastaController {
    async handle(res: Response){
        const listService = new ListPastaService()
        try {
            const list = await listService.execute()
            console.log("suceso ao listar massas");
            return res.status(200).json(list)
        } catch (error) {
            console.log('erro ao listar massas');
            return res.status(400).json({error: 'erro ao listar massas'})
        }
    }
}

export {ListPastaController}