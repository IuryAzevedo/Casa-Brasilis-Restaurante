import prisma from "../../prisma/client";

class ListDrinksService {
    async execute() {
        const list = await prisma.drinks.findMany()
        return list
    }
}

export {ListDrinksService}