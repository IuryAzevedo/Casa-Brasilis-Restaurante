import prisma from '../../prisma/client';

interface DeleteProps {
  id: string;
}

class DeleteEntryService {
  async execute({ id }: DeleteProps) {
    const entry = await prisma.entradas.findUnique({
      where: {
        id: id,
      },
    });
    if (!entry) {
      throw new Error('entrada não encontrada');
    }
    const e = await prisma.entradas.delete({
      where: {
        id: id,
      },
    });
    return e;
  }
}
export { DeleteEntryService };
