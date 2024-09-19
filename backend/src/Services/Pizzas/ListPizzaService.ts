import prisma from "../../prisma/client";

class ListPizzaService {
    async execute() {
      const list = await prisma.pizzas.findMany()
      return list
    }
}

export {ListPizzaService}