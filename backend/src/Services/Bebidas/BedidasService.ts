import prisma from "../../prisma/client";

interface BebidasProps {
    nome: string
    preco: number
    litros: number
}

class BebidasService {
    async execute({nome, preco, litros}: BebidasProps){
        const existentBebida = await prisma.bebidas.findFirst({
            where: {
                nome: nome
            }
        })
        if(existentBebida){
            throw new Error("bebida ja registrada")
        }
        const bebidaData = {nome, preco, litros}
        const bebidas = await prisma.bebidas.create({
            data: bebidaData
        })
        return bebidas
    }
}

export {BebidasService}