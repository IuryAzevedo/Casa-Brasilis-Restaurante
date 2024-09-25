import { Request, Response } from 'express';
import { DeleteBebidasService } from '../../Services/Bebidas/DeleteBebidasService';

class DeleteBebidasController {
  async handle(req: Request, res: Response) {
    const { id } = req.body;
    const deleteService = new DeleteBebidasService();
    try {
      const excluir = await deleteService.execute({
        id: String(id),
      });
      console.log('Bebida deletada com sucesso!');
      return res.status(200).json(excluir);
    } catch (error) {
      console.log('Não possível excluir a bebida');
      return res.status(400).json({ error: 'Não possível excluir a bebida' });
    }
  }
}

export { DeleteBebidasController };
