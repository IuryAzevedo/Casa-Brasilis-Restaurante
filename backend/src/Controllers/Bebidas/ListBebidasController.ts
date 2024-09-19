import { Request, Response } from "express";
import { ListBebidasService } from "../../Services/Bebidas/ListBebidasService";

class ListBebidasController {
    async handle(req: Request, res: Response) {
        const listBebidasService = new ListBebidasService();
        try {
            const bebidas = await listBebidasService.execute();
            return res.status(200).json(bebidas);
        } catch (error) {
            console.log("Erro ao listar as bebidas");
            return res.status(400).json({ error: "Erro ao listar as bebidas" });
        }
    }
}

export { ListBebidasController };
