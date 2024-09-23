import prisma from "../../prisma/client";

class ListBrazilianFoodService {
    async execute(){
        const listBrazilian = await prisma.comidaBrasileira.findMany()
        console.log("Resultado da busca:", listBrazilian);
        return listBrazilian
    }
}

export {ListBrazilianFoodService}