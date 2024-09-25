import prisma from '../../prisma/client';

interface DeleteProps {
  id: string;
}

class DeleteBebidasService {
  async execute({ id }: DeleteProps) {
    const bebida = await prisma.bebidas.findUnique({
      where: {
        id: id,
      },
    });
    if (!bebida) {
      throw new Error('Bebida não encontrada');
    }
    const excluir = await prisma.bebidas.delete({
      where: {
        id: id,
      },
    });
    return excluir;
  }
}

export { DeleteBebidasService };
