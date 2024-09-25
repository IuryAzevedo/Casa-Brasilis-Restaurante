import { Request, Response } from 'express';
import { DeleteGuarnicaoService } from '../../Services/Guarnicao/DeleteGuarnicaoService';

class DeleteGuarnicaoController {
  async handle(req: Request, res: Response) {
    const { id } = req.body;
    const deleteService = new DeleteGuarnicaoService();
    try {
      const e = await deleteService.execute({
        id: String(id),
      });
      console.log('comida excluida com sucesso');
      return res.status(200).json(e);
    } catch (error) {
      console.log('comida nao excluida');
      return res.status(400).json({ error: 'comida nao excluida' });
    }
  }
}

export { DeleteGuarnicaoController };
