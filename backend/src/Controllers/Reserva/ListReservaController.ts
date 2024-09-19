import { Response } from "express";
import { ListReservaService } from "../../Services/Reserva/ListReservaService";

class ListReservaController {
    async handle(res: Response){
        const listService = new ListReservaService()
        try {
            const list = await listService.execute()
            console.log('sucesso ao listar reservas');
            return res.status(200).json(list)
        } catch (error) {
            console.log('erro ao listar reservas');
            return res.status(400).json({error: 'erro ao listar reservas'})
        }
    }
}

export {ListReservaController}