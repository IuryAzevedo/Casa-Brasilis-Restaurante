import { Request, Response } from "express";
import { FishFoodService } from "../../Services/Peixes/FishFoodService";

class FishFoodController {
    async handle(req: Request, res: Response){
        const {nome, preco, peso, descricao} = req.body;
        const fishService = new FishFoodService();
        try {
          const foodData = {
            nome, descricao, peso, preco
          }  
          const fish = await fishService.execute(foodData)
          console.log("alimento registrado com sucesso!");
          return res.status(200).json(fish)
        } catch (error) {
            console.log("algo deu errado ao registrar o alimento");
            return res.status(400).json({error: "algo deu errado ao registrar o alimento"})
        }
    }
}

export {FishFoodController}