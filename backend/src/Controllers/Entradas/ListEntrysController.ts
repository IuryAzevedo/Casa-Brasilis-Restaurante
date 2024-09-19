import { Response } from "express";
import { ListEntrysService } from "../../Services/Entradas/ListEntrysService";

class ListEntrysController {
    async handle(res: Response) {
        const listService = new ListEntrysService()
        try {
            const list = await listService.execute()
            console.log('sucesso ao listar entradas');
            return res.status(200).json(list)
        } catch (error) {
            console.log("erro ao listar entradas");
            return res.status(400).json({error: "erro ao listar entradas"})
        }
    }
}

export {ListEntrysController}