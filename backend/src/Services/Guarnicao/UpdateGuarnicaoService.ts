import prisma from "../../prisma/client";

interface UpdateProps {
    id: string
    nome?: string
    preco?: number
    peso?: number
    descricao?: string
}

class UpdateGuarnicaoService {
    async execute({id, nome, preco, peso, descricao}: UpdateProps) {
        const guarnicao = await prisma.guarnicao.findUnique({
            where: {
                id: id
            }
        })
        if(!guarnicao){
            throw new Error("Guarnicao não encontrada, tente novamente!")
        }
        const update = await prisma.guarnicao.update({
            where: {
                id: id,
            },
            data: {
                nome: nome || guarnicao.nome,
                preco: preco || guarnicao.preco,
                peso: peso || guarnicao.peso,
                descricao: descricao || guarnicao.descricao
            }
        })
        return update;
    }
}

export {UpdateGuarnicaoService}