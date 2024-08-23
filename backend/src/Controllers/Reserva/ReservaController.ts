import { Request, Response } from "express";
import { ReservaService } from "../../Services/Reserva/ReservaService";

class ReservaController {
    async handle(req: Request, res: Response){
        const {nome, sobrenome, data, horario, numPessoas} = req.body;
        const reservaService = new ReservaService()
        try {
            const reservaData = {nome, sobrenome, data, horario, numPessoas}
            const reserva = await reservaService.execute(reservaData)
            console.log('reserva criada com sucesso');
            return res.status(200).json(reserva);
        } catch (error) {
            console.log('algo deu errado ao criar a reserva');
            res.status(400).json({error: "algo deu errado ao criar a reserva"})
        }
    }
}

export {ReservaController}