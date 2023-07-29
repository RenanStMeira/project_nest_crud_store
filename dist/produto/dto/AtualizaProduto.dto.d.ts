import { CaracteristicaProdutoDTO, ImagemProdutoDTO } from './CriaProduto.dto';
export declare class AtualizaProdutoDTO {
    id: string;
    usuarioId: string;
    nome: string;
    valor: number;
    quantidadeDisponivel: number;
    descricao: string;
    caracteristicas: CaracteristicaProdutoDTO[];
    imagens: ImagemProdutoDTO[];
    categoria: string;
}
