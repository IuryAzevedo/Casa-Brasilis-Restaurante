import prisma from "../../prisma/client";

interface UpdateProps {
    id: string
    nome: string
    sobrenome: string
    horario: string
    data: Date
    numPessoas: number
}

class UpdateReservaService {
    async execute({id, nome, sobrenome, horario, data, numPessoas}:UpdateProps){
        const reserva = await prisma.reserva.findUnique({
            where: {
                id: id
            }
        })
        if(!reserva){
            throw new Error('Reserva não encontrada!')
        }
        const update = await prisma.reserva.update({
            where: {
                id: id,
            },
            data: {
                nome: nome || reserva.nome,
                sobrenome: sobrenome || reserva.sobrenome,
                horario: horario || reserva.horario,
                data: data || reserva.data,
                numPessoas: numPessoas || reserva.numPessoas
            }
        })
        return update;
    }
}

export {UpdateReservaService}