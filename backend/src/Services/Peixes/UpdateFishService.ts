import prisma from "../../prisma/client";

interface UpdateProps {
    id: string
    nome?: string
    descricao?: string
    preco?: number
    peso?: number
}

class UpdateFishService {
    async execute({id, descricao, nome, preco, peso}: UpdateProps){
        const fish = await prisma.peixes.findUnique({
            where: {
                id: id
            }
        })
        if(!fish){
            throw new Error('Peixe não encotrado')
        }
        const update = await prisma.peixes.update({
            where: {
                id: id,
            },
            data: {
                nome: nome || fish.nome,
                descricao: descricao || fish.descricao,
                preco: preco || fish.preco,
                peso: peso || fish.peso
            }
        })
        return update;
    }
}

export {UpdateFishService}