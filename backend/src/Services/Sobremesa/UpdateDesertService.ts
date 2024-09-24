import prisma from '../../prisma/client';

interface UpdateProps {
  id: string;
  nome?: string;
  descricao?: string;
  preco?: number;
  peso?: number;
  quantidade?: number;
}

class UpdateDesertService {
  async execute({ id, nome, descricao, preco, peso, quantidade }: UpdateProps) {
    const desert = await prisma.sobremesa.findUnique({
      where: {
        id: id,
      },
    });
    if (!desert) {
      throw new Error('Sobremesa não encontrada');
    }
    const update = await prisma.sobremesa.update({
      where: {
        id: id,
      },
      data: {
        nome: nome || desert.nome,
        descricao: descricao || desert.descricao,
        preco: preco || desert.preco,
        peso: peso || desert.peso,
        quantidade: quantidade || desert.quantidade,
      },
    });
    return update;
  }
}

export { UpdateDesertService };
