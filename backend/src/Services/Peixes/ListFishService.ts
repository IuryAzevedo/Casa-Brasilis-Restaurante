import prisma from "../../prisma/client";

class ListFishService {
    async execute() {
        const list = await prisma.peixes.findMany()
        return list
    }
}

export {ListFishService}