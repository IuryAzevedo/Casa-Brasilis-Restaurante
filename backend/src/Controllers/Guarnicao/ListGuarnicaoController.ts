import { Response } from "express";
import { ListGuarnicaoService } from "../../Services/Guarnicao/ListGuarnicaoService";

class ListGuarnicaoController {
    async handle(res: Response){
        const listService = new ListGuarnicaoService()
        try {
            const list = await listService.execute()
            console.log("sucesso ao listar guarnicoes");
            return res.status(200).json(list)
        } catch (error) {
            console.log('erro ao listar guarnicoes');
            return res.status(400).json({error: 'erro ao listar guarnicoes'})
        }
    }
}

export {ListGuarnicaoController}