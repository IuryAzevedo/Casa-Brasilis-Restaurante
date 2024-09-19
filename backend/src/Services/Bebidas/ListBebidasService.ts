import prisma from "../../prisma/client";

class ListBebidasService {
    async execute() {
        const category = await prisma.bebidas.findMany()
        return category
    }
}

export {ListBebidasService}