import prisma from "../../prisma/client";

interface GuarnicaoProps {
    nome: string
    preco: number
    peso: number
    descricao: string
}

class GuarnicaoFoodService {
    async execute({nome, preco, peso, descricao}: GuarnicaoProps){
        const existentGuarnicao = await prisma.guarnicao.findFirst({
            where: {
                nome: nome
            }
        })
        if(existentGuarnicao){
            throw new Error("alimento já registrado, tente outro!")
        }
        const foodData = {
            nome, preco, peso, descricao
        }
        const guarnicao = await prisma.guarnicao.create({
            data: foodData
        })
        return guarnicao
    }
}

export {GuarnicaoFoodService}