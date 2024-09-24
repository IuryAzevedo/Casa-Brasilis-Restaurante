import prisma from "../../prisma/client";

interface UpdateProps {
    id: string
    nome?: string
    descricao?: string
    preco?: number
    tamanho?: number
}

class UpdatePizzaService {
    async execute({id, nome, descricao, preco, tamanho}:UpdateProps){
        const pizza = await prisma.pizzas.findUnique({
            where: {
                id: id
            }
        })
        if(!pizza){
            throw new Error('Pizza não encontrada')
        }
        const update = await prisma.pizzas.update({
            where: {
                id: id,
            },
            data: {
                nome: nome || pizza.nome,
                descricao: descricao || pizza.descricao,
                preco: preco || pizza.preco,
                tamanho: tamanho || pizza.tamanho
            }
        })
        return update;
    }
}

export {UpdatePizzaService}