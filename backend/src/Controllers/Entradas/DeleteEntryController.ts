import { Request, Response } from 'express';
import { DeleteEntryService } from '../../Services/Entradas/DeleteEntryService';

class DeleteEntryController {
  async handle(req: Request, res: Response) {
    const { id } = req.body;
    const deleteService = new DeleteEntryService();
    try {
      const e = await deleteService.execute({
        id: String(id),
      });
      console.log('comida excluida com sucesso!');
      return res.status(200).json(e);
    } catch (error) {
      console.log('comida não excluida');
      return res.status(400).json({ error: 'comida não excluida' });
    }
  }
}

export { DeleteEntryController };
