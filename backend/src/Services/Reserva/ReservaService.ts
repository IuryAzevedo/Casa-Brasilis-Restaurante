import prisma from "../../prisma/client";

interface ReservaProps {
    nome: string
    sobrenome: string
    data: Date
    horario: string
    numPessoas: number
}

class ReservaService {
    async execute({nome, sobrenome, data, horario, numPessoas }: ReservaProps){
        const existentReserva = await prisma.reserva.findFirst({
            where: {
                nome: nome,
                sobrenome: sobrenome,
                data: data
            }
        })
        if(existentReserva){
            throw new Error("Reserva já existente")
        }

        const reservaData = {
            nome, sobrenome, data, horario, numPessoas
        }

        const reserva = await prisma.reserva.create({
            data: reservaData
        })
        
        return reserva;
    }
}

export {ReservaService}