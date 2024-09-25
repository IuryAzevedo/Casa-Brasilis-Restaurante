import prisma from '../../prisma/client';

interface DeleteProps {
  id: string;
}

class DeleteMeatService {
  async execute({ id }: DeleteProps) {
    const meat = await prisma.carnes.findUnique({
      where: {
        id: id,
      },
    });
    if (!meat) {
      throw new Error('Carne não encontrada');
    }
    const excluir = await prisma.carnes.delete({
      where: {
        id: id,
      },
    });
    return excluir;
  }
}

export { DeleteMeatService };
