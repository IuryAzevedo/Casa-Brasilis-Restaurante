import { Request, Response } from "express";
import { ListBebidasService } from "../../Services/Bebidas/ListBebidasService";

class ListBebidasController {
    async handle(req: Request, res: Response){
        const listBebidasService = new ListBebidasService()
        try {
            const listBebidas = await listBebidasService.execute(req, res)
            return res.status(200).json(listBebidas)
        } catch (error) {
            
        }
    }
}