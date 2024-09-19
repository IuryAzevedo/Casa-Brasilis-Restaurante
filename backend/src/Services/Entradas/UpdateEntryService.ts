import prisma from "../../prisma/client";

interface UpdateProps {
    id: string
    nome?: string
    preco?: number
    descricao?: string
    peso?: number
    quantidade?: number
}

class UpdateEntryService {
    async execute({id, nome, preco, peso, descricao, quantidade}: UpdateProps){
        const entry = await prisma.entradas.findUnique({
            where: {
                id: id
            }
        })
        if(!entry){
            throw new Error('entrada não encontrada');
        }

        const update = await prisma.entradas.update({
            where: {
                id: id,
            },
            data: {
                nome: nome || entry.nome,
                preco: preco || entry.preco,
                peso: peso || entry.peso,
                descricao: descricao || entry.descricao,
                quantidade: quantidade || entry.quantidade
            }
        })
        return update 
    }
}

export {UpdateEntryService}