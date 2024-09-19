import prisma from "../../prisma/client";

interface UpdateProps {
    id: string
    nome?: string
    preco?: number
    peso?: number
    descricao?: string
}

class UpdateBrazilianFoodService {
    async execute({id, nome, preco, peso, descricao}: UpdateProps){
        const brazilianFood = await prisma.comidaBrasileira.findUnique({
            where: {
                id: id,
            },
        })
        if(!brazilianFood){
            throw new Error('Comida não encontrada')
        }

        const update = await prisma.comidaBrasileira.update({
            where: {
                id: id,
            },
            data: {
                nome: nome || brazilianFood.nome,
                preco: preco || brazilianFood.preco,
                peso: peso || brazilianFood.peso,
                descricao: descricao || brazilianFood.descricao
            }
        })

        return update
    }
}

export {UpdateBrazilianFoodService}