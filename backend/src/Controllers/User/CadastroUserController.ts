import { Request, Response } from "express";
import { CadastroUserService } from "../../Services/User/CadastroUserService";

class CadastroUserController {
    async handle(req: Request, res: Response) {
        const { nome, email, senha } = req.body
        const cadastradoUserService = new CadastroUserService()

        try {
            const userData = {
                nome, email, senha
            }
            const user = await cadastradoUserService.execute(userData)
            console.log('USUÁRIO CRIADO COM SUCESSO!');
            return res.status(200).json(user)
        } catch (error) {
            console.log('erro ao criar usuário');
            return res.status(400).json({ error: "Erro ao criar usuário", message: error.message })
        }
    }
}

export { CadastroUserController }