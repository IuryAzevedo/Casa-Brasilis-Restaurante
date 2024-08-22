import prisma from "../../prisma/client";

interface EntryProps {
    nome: string
    preco: number
    peso: number
    quantidade: number
    descricao: string
}

class EntryFoodService { 
    async execute({nome, preco, peso, quantidade, descricao}: EntryProps){
       const existentEntry = await prisma.entradas.findFirst({
            where: {
                nome: nome
            }
       }) 
       if(existentEntry){
            throw new Error("alimento ja registrado, tente outro")
       }

       const foodData = {
        nome, preco, peso, quantidade, descricao
       }

       const entry = await prisma.entradas.create({
        data: foodData
       })

       return entry
    }
}

export {EntryFoodService}