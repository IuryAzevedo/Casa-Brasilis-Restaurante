import prisma from "../../prisma/client";

interface DesertProps {
    nome: string
    preco: number
    peso: number
    quantidade: number
    descricao: string
}

class DesertFoodService {
    async execute({nome, preco, peso, quantidade, descricao}: DesertProps){
        const existenDesert = await prisma.sobremesa.findFirst({
            where: {
                nome: nome
            }
        })

        if(existenDesert){
            throw new Error("alimento ja registrado")
        }

        const foodData = {
            nome, preco, peso, quantidade, descricao
        }

        const desert = await prisma.sobremesa.create({
            data: foodData
        })

        return desert
    }
}

export {DesertFoodService}