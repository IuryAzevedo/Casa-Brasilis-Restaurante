import { Request, Response } from "express";
import { UpdateReservaService } from "../../Services/Reserva/UpdateReservaService";

class UpdateReservaController {
    async handle(req: Request, res: Response){
       const {id, nome, sobrenome, horario, data, numPessoas} = req.body;
       const updateService = new UpdateReservaService();
       try {
        const update = await updateService.execute({
            id: String(id),
            nome, sobrenome, horario, data, numPessoas
        })
            console.log('Reserva atualizada com sucesso!');
            return res.status(200).json(update)
       } catch (error) {
        console.log('Não foi possível atualizar a reserva');
            return res.status(400).json({error: 'Não foi possível atualizar a reserva'})        
       }
    }
}

export {UpdateReservaController}