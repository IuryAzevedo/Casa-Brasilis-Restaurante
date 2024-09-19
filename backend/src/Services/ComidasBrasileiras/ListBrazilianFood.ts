import prisma from "../../prisma/client";

class ListBrazilianFoodService {
    async execute(){
        const listBrazilian = await prisma.comidaBrasileira.findMany()
        return listBrazilian
    }
}

export {ListBrazilianFoodService}