import { Request, Response } from 'express';
import { DeleteMeatService } from '../../Services/Carnes/DeleteMeatService';

class DeleteMeatController {
  async handle(req: Request, res: Response) {
    const { id } = req.body;
    const deleteService = new DeleteMeatService();
    try {
      const excluir = await deleteService.execute({
        id: String(id),
      });
      console.log('Carne deletada com sucesso!');
      return res.status(200).json(excluir);
    } catch (error) {
      console.log('Não foi possível excluir o alimento');
      return res.status(400).json({ error: 'Não foi possível excluir o alimento' });
    }
  }
}

export { DeleteMeatController };
