import prisma from "../../prisma/client"

interface UpdateProps {
    id: string
    nome?: string
    preco?: number
    litros?: number
}

class UpdateBebidasService {
    async execute({id, nome, preco, litros}: UpdateProps){
        const bebida = await prisma.bebidas.findUnique({
            where: {
                id: id,
            }
        })
        if(!bebida){
            throw new Error('bebida não encontrada')
        }
        const updateBebida = await prisma.bebidas.update({
            where: {
                id: id,
            },
            data: {
                nome: nome || bebida.nome,
                preco: preco || bebida.preco,
                litros: litros || bebida.litros
            },
        })

        return updateBebida
    }
}

export {UpdateBebidasService}