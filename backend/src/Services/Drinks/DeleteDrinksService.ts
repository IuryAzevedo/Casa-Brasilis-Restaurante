import { error } from 'console';
import prisma from '../../prisma/client';

interface DeleteProps {
  id: string;
}

class DeleteDrinksServicce {
  async execute({ id }: DeleteProps) {
    const drink = await prisma.drinks.findUnique({
      where: {
        id: id,
      },
    });
    if (!drink) {
      throw new Error('Drink não encontrado');
    }
    const e = await prisma.drinks.delete({
      where: {
        id: id,
      },
    });
    return e;
  }
}

export { DeleteDrinksServicce };
