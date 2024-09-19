import prisma from "../../prisma/client";

class ListGuarnicaoService {
    async execute() {
        const list = await prisma.guarnicao.findMany()
        return list
    }
}

export {ListGuarnicaoService}