import prisma from "../../prisma/client"

interface UpdateProps {
    id: string,
    nome?: string,
    preco?: number,
    peso?: number
    descricao?: string
}

class UpdateMeatService {
    async execute({id, nome, preco, peso, descricao}: UpdateProps){
        const meat = await prisma.carnes.findUnique({
            where: {
                id: id
            }
        })  
        
        if(!meat){
            throw new Error("Carne não encontrada")
        }  

        const updateMeat = await prisma.carnes.update({
            where: {
                id: id,
            },
            data: {
                nome: nome || meat.nome,
                preco: preco || meat.preco,
                peso: peso || meat.peso,
                descricao: descricao || meat.descricao
            }
        })

        return updateMeat
    }
}

export {UpdateMeatService}