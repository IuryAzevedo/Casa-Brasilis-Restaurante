import prisma from "../../prisma/client";

class ListPastaService {
    async execute() {
        const list = await prisma.massas.findMany()
        return list
    }
}

export {ListPastaService}