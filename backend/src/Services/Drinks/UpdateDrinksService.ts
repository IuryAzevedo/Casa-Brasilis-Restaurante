import prisma from "../../prisma/client";

interface UpdateDrinksProps {
    id: string
    nome?: string
    preco?: number
    descricao?: string
}

class UpdateDrinksService {
    async execute({id, nome, preco, descricao}:UpdateDrinksProps){
        const drinks = await prisma.drinks.findUnique({
            where: {
                id: id
            }
        })
        if(!drinks){
            throw new Error('Drink não encontrado')
        }
        const update = await prisma.drinks.update({
            where: {
                id: id,
            },
            data: {
                nome: nome || drinks.nome,
                preco: preco || drinks.preco,
                descricao: descricao || drinks.descricao,
            }
        })

        return update;
    }
}

export {UpdateDrinksService}