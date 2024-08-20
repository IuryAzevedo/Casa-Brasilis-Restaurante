import { log } from "console"
import { BrazilianFoodService } from "../../Services/ComidasBrasileiras/BrazilianFoodService"
import { Request, Response } from "express"


class BrazilianFoodController {
    async handle(req: Request, res: Response) {
        const {nome, preco, peso, descricao} = req.body
        const foodService = new BrazilianFoodService()
        try {
            const foodData = {
                nome, preco, peso, descricao
            }
            const food = await foodService.execute(foodData)
            console.log('comida cadastrada com sucesso!');
            return res.status(200).json(food)
        } catch (error) {
            console.log('erro cadastrar comida');
            return res.status(400).json({error: 'erro cadastrar comida'})
        }

    }
}


export { BrazilianFoodController}