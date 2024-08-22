import prisma from "../../prisma/client";

interface FishFoodProps {
    nome: string
    preco: number
    peso: number
    descricao: string
}

class FishFoodService {
    async execute({nome, preco, peso, descricao}:FishFoodProps){
        const existentFish = await prisma.peixes.findFirst({
            where: {
                nome: nome
            }
        })
        if(existentFish){
            throw new Error("alimento já registrado, tente outro!")
        }
        const foodData = {
            nome, preco, peso, descricao
        }

        const fish = await prisma.peixes.create({
            data: foodData
        })

        return fish
    }
}

export {FishFoodService}