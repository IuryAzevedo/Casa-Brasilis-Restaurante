import prisma from "../../prisma/client"

interface MeatFoodProps {
    nome: string
    preco: number
    peso: number
    descricao: string
}

class MeatFoodService {
    async execute({nome, preco, peso, descricao}: MeatFoodProps){
        
        const existentMeat = await prisma.carnes.findFirst({
            where: {
                nome: nome
            }
        })
        
        if(existentMeat){
            throw new Error("Carne ja cadastrada, tente outro nome!")
        }
        const meatData = {
            nome, preco, peso, descricao
        }

        const meatFood = await prisma.carnes.create({
            data: meatData
        })

        return meatFood
    }
}

export {MeatFoodService}