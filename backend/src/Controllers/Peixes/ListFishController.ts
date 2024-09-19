import { Response } from "express";
import { ListFishService } from "../../Services/Peixes/ListFishService";

class ListFishController {
    async handle(res: Response) {
        const listService = new ListFishService()
        try {
            const list = await listService.execute
            console.log("sucesso ao listar peixes");
            return res.status(200).json(list)
        } catch (error) {
            console.log('erro ao listar peixes');
            return res.status(400).json({error: 'erro ao listar peixes'})
        }
    }
}

export {ListFishController}