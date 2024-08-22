import { Request, Response } from "express";
import { PizzaFoodService } from "../../Services/Pizzas/PizzaFoodService";

class PizzaFoodController{
    async handle(req: Request, res: Response){
        const {nome, preco, tamanho, descricao} = req.body
        const pizzaService = new PizzaFoodService()
        try {
            const foodData = {
                nome, preco, tamanho, descricao
            }
            const pizza = await pizzaService.execute(foodData)
            console.log('Pizza registrada com sucesso!');
            return res.status(200).json(pizza)

        } catch (error) {
            console.log("algo deu errado ao registrar o alimento");
            return res.status(400).json({error: "algo deu errado ao registrar o alimento"})            
        }
    }
 }

 export {PizzaFoodController}