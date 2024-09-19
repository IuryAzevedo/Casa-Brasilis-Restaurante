import { Response } from "express";
import { ListMeatService } from "../../Services/Carnes/ListMeatService";


class ListMeatController {
    async handle(res: Response){
        const listService = new ListMeatService()
        try {
            const listMeat = await listService.execute()
            console.log('carnes listadas com sucesso!');
            res.status(200).json(listMeat)
        } catch (error) {
            console.log("erro ao listar as carnes");
            res.status(400).json({error: "erro ao listar as carnes"})
        }
    }
}

export {ListMeatController}