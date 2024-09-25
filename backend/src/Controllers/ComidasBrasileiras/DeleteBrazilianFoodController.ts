import { Request, Response } from 'express';
import { DeleteBrazilianFoodService } from '../../Services/ComidasBrasileiras/DeleteBrazilianFoodService';

class DeleteBrazilianFoodController {
  async handle(req: Request, res: Response) {
    const { id } = req.body;
    const deleteService = new DeleteBrazilianFoodService();
    try {
      const excluir = await deleteService.execute({
        id: String(id),
      });
      console.log('comida excluida com sucesso!');
      return res.status(200).json(excluir);
    } catch (error) {
      console.log('não foi possível excluir a comida');
      return res.status(400).json({ error: 'não foi possível excluir a comida' });
    }
  }
}
export { DeleteBrazilianFoodController };
