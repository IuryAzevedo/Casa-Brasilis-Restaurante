import { error } from "console"
import prisma from "../../prisma/client"
import { Express } from "express"
import { hash } from "bcryptjs"


interface UserProps {
    nome: string
    email: string
    senha: string
}

class CadastroUserService {
    async execute({ nome, email, senha }: UserProps) {
        if (!email) {
            throw new Error('email incorreto, tente novamente!')
        }

        const usuarioExistente = await prisma.user.findFirst({
            where: {
                email: email
            }
        })

        if (usuarioExistente) {
            throw new Error('Email já cadastrado, tente outro!')
        }
        const senhaHash = await hash(senha, 8);

        const userData = {
            nome,
            email,
            senha: senhaHash
        }


        const user = await prisma.user.create({
            data: userData
        })
        
        return user;

    }
}

export { CadastroUserService }