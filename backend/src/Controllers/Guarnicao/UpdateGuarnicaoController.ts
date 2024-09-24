import { Request, Response } from 'express';
import { UpdateGuarnicaoService } from '../../Services/Guarnicao/UpdateGuarnicaoService';

class UpdateGuarnicaoController {
  async handle(req: Request, res: Response) {
    // const {id} = req.params;
    const { id, nome, preco, peso, descricao } = req.body;
    const updateService = new UpdateGuarnicaoService();
    try {
      const update = updateService.execute({
        id: String(id),
        nome,
        preco,
        peso,
        descricao,
      });
      console.log('Comida atualizada com sucesso!');
      return res.status(200).json(update);
    } catch (error) {
      console.log('Não foi possível atualizar a guarnicão!');
      return res.status(400).json({ error: 'Não foi possível atualizar a guarnicão!' });
    }
  }
}

export { UpdateGuarnicaoController };
