import { sign } from "jsonwebtoken"
import prisma from "../../prisma/client"
import { compare } from 'bcryptjs'


interface LoginProps {
    email: string
    senha: string
}


class LoginUserService {
    async execute({ email, senha }: LoginProps) {
        const user = await prisma.user.findFirst({
            where: {
                email: email
            }
        })

        if (!user) {
            throw new Error("Usuário ou senha icorretos!")
        }
        const senhaMatch = await compare(senha, user.senha)

        if (!senhaMatch) {
            throw new Error("senha incorreta, tente novamente!")
        }
        const token = sign({
            nome: user.nome,
            email: user.email
        },
            process.env.JWT_SECRET,
            {
                subject: user.id,
                expiresIn: '30d'
            }
        )

        return {
            id: user.id,
            nome: user.nome,
            email: user.email,
            token: token
        }

    }
}

export { LoginUserService }