import { Request, Response } from "express";
import { GuarnicaoFoodService } from "../../Services/Guarnicao/GuarnicaoFoodService";


class GuarnicaoFoodController {
    async handle(req: Request, res: Response){
        const {nome, preco, peso, descricao} = req.body
        const guarnicaoService = new GuarnicaoFoodService()
        try {
            const foodData ={
                nome, preco, peso, descricao
            }
            const guarnicao = guarnicaoService.execute(foodData)
            console.log('alimento registrado com sucesso');
            return res.status(200).json(guarnicao)
        } catch (error) {
            console.log("algo deu errado ao registrar o alimento");
            return res.status(400).json({error: "algo deu errado ao registrar o alimento"})          
        }
    }
}

export {GuarnicaoFoodController}