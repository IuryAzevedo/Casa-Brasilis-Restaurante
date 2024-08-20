import prisma from "../../prisma/client"

interface BrazilianFoodProps {
    nome: string
    preco: number
    peso: number
    descricao: string
}

class BrazilianFoodService {
    async execute({nome, preco, peso, descricao}:BrazilianFoodProps){
        const existentFood = await prisma.comidaBrasileira.findFirst({
            where: {
                nome: nome
            }
        })

        if(existentFood){
            throw new Error('comida já cadastrada, tente outro nome!')
        }

        const foodData = {
            nome, preco, peso, descricao
        }
        const food = await prisma.comidaBrasileira.create({
            data: foodData
        })

        return food
    }
}


export {BrazilianFoodService}