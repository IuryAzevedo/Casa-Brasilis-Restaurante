import { Request, Response } from "express"
import { LoginUserService } from "../../Services/User/LoginUserService"

class LoginUserController {
    async handle(req: Request, res: Response) {
        const {email, senha}= req.body
        const loginUserService = new LoginUserService()
        try {
            const login = await loginUserService.execute({
                email, senha
            })
            console.log('usuário logado com sucesso!');
            return res.status(200).json(login)
        } catch (error) {
            return res.status(400).json({error: "erro ao tentar fazer login!"})
        }
    }
}

export {LoginUserController}