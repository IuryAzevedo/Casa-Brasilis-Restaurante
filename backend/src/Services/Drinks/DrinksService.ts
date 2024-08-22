import prisma from "../../prisma/client";

interface DrinkProps {
    nome: string
    preco: number
    descricao: string
}

class DrinksService {
    async execute({nome, preco, descricao}: DrinkProps){
        const existentDrink = await prisma.drinks.findFirst({
            where: {
                nome: nome
            }
        })
        if(existentDrink){
            throw new Error("drink ja registrado")
        }
        const drinkData = {nome, preco, descricao}
        const drink = await prisma.drinks.create({
            data: drinkData
        })
        return drink
    }
}

export {DrinksService}