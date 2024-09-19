import prisma from "../../prisma/client";

class ListEntrysService {
    async execute(){
        const list = await prisma.entradas.findMany()
        return list
    }
}

export {ListEntrysService}