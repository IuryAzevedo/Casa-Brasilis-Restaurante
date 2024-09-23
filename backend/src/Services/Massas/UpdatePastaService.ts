import prisma from "../../prisma/client";

interface UpdateProps {
    id: string
    nome?: string
    descricao?: string
    preco?: number
    peso?: number
}

class UpdatePastaService {
    async execute({id, nome, descricao, preco, peso}: UpdateProps){
        const pasta = await prisma.massas.findUnique({
            where: {
                id: id
            }
        })
        if(!pasta){
            throw new Error('massa não encontrada, tente novamente')
        }
        const update = await prisma.massas.update({
            where: {
                id: id,
            },
            data: {
                nome: nome || pasta.nome,
                descricao: descricao || pasta.descricao,
                preco: preco || pasta.preco,
                peso: peso || pasta.preco
            }
        })
        return update       
    }
}

export {UpdatePastaService}