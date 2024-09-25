import prisma from '../../prisma/client';

interface DeleteProps {
  id: string;
}

class DeleteGuarnicaoService {
  async execute({ id }: DeleteProps) {
    const guarnicao = await prisma.guarnicao.findUnique({
      where: {
        id: id,
      },
    });
    if (!guarnicao) {
      throw new Error('comida não encontrada');
    }
    const e = await prisma.guarnicao.delete({
      where: {
        id: id,
      },
    });
    return e;
  }
}

export { DeleteGuarnicaoService };
