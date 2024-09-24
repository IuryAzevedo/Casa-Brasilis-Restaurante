import { Request, Response } from 'express';
import { UpdateMeatService } from '../../Services/Carnes/UpdateMeatService';

class UpdateMeatController {
  async handle(req: Request, res: Response) {
    // const {id} = req.params
    const { id, nome, preco, peso, descricao } = req.body;
    const updateMeatService = new UpdateMeatService();
    try {
      const updateMeat = await updateMeatService.execute({
        id: String(id),
        nome,
        preco,
        peso,
        descricao,
      });
      console.log('Carne atualizada com sucesso!');
      return res.status(200).json(updateMeat);
    } catch (error) {
      console.log('Erro ao atualizar carne');
      return res.status(400).json({ error: 'Erro ao atualizar carne' });
    }
  }
}

export { UpdateMeatController };
