import { Response } from "express";
import { ListDesertService } from "../../Services/Sobremesa/ListDesertService";

class ListDesertController {
    async handle(res: Response){
        const listService = new ListDesertService()
        try {
            const list = await listService.execute()
            console.log('sucesso ao listar sobremesas');
            return res.status(200).json(list)
        } catch (error) {
            console.log('erro ao listar sobremesas');
            return res.status(400).json({error: 'erro ao listar sobremesas'})
        }
    }
}

export {ListDesertController}