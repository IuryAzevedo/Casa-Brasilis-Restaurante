import prisma from "../../prisma/client";

class ListDesertService {
    async execute(){
        const list = await prisma.sobremesa.findMany()
        return list
    }
}

export {ListDesertService}