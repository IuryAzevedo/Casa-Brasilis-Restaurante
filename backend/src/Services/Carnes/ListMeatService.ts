import prisma from "../../prisma/client";

class ListMeatService {
    async execute(){
        const listMeat = await prisma.carnes.findMany()
        return listMeat
    }
}

export {ListMeatService}