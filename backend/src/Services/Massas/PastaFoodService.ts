import prisma from "../../prisma/client";

interface PastaFoodProps {
    nome: string
    preco: number
    peso: number
    descricao: string
}


class PastaFoodService {
    async execute({nome, preco, peso, descricao}: PastaFoodProps){
        const existentPasta = await prisma.massas.findFirst({
            where: {
                nome: nome
            }
        })

        if(existentPasta) {
            throw new Error('comida já registrada, tente outra!')
        }

        const foodData = {
            nome, preco, peso, descricao
        }

        const pasta = await prisma.massas.create({
            data: foodData
        })

        return pasta

    }

}

export {PastaFoodService}