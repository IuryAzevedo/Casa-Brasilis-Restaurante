import prisma from '../../prisma/client';

interface DeleteProps {
  id: string;
}

class DeleteBrazilianFoodService {
  async execute({ id }: DeleteProps) {
    const brazil = await prisma.comidaBrasileira.findUnique({
      where: {
        id: id,
      },
    });
    if (!brazil) {
      throw new Error('comida não encontrada');
    }
    const excluir = await prisma.comidaBrasileira.delete({
      where: {
        id: id,
      },
    });
    return excluir;
  }
}

export { DeleteBrazilianFoodService };
