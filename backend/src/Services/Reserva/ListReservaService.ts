import prisma from "../../prisma/client";

class ListReservaService {
    async execute(){
        const list = await prisma.reserva.findMany()
        return list
    }
}

export {ListReservaService}