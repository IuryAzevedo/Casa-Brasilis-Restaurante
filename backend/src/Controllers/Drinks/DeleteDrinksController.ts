import { Request, Response } from 'express';
import { DeleteDrinksServicce } from '../../Services/Drinks/DeleteDrinksService';

class DeleteDrinksController {
  async handle(req: Request, res: Response) {
    const { id } = req.body;
    const deleteService = new DeleteDrinksServicce();
    try {
      const e = await deleteService.execute({
        id: String(id),
      });
      console.log('drink excluido com sucesso!');
      return res.status(200).json(e);
    } catch (error) {
      console.log('não foi possível excluir o drink');
      return res.status(400).json({ error: 'não foi possível excluir o drink' });
    }
  }
}

export { DeleteDrinksController };
