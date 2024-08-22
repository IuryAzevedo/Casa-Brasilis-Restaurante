import prisma from "../../prisma/client";
interface PizzaFoodProps{
    nome: string
    preco: number
    descricao: string
    tamanho: number
}
class PizzaFoodService {
    async execute({nome, preco, descricao, tamanho}: PizzaFoodProps){
        const existentPizza = await prisma.pizzas.findFirst({
            where: {
                nome: nome
            }         
        })
        if(existentPizza){
            throw new Error("Pizza já cadastrada, tente outro nome!")
        }
        const foodData = {
            nome, preco,  descricao, tamanho
        }
        const pizza = await prisma.pizzas.create({
            data: foodData
        })
        return pizza;
    }
}

export {PizzaFoodService}