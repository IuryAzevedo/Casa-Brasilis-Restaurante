import { NOMEM } from "dns";
import prisma from "../../prisma/client";
interface ListBebidasProps {
    nome: string
}
class ListBebidasService {
    async execute({nome}: ListBebidasProps) {
        const category = await prisma.bebidas.findMany({
            where: {
                nome: nome
            },
            select: {
                id: true,
                nome: true,
                preco: true,
                litros: true
            }
        })

        return category
    }
}

export {ListBebidasService}