import { ProdutoEntity } from './produto.entity';
export declare class ProdutoRepository {
    private produtos;
    listaTodos(): ProdutoEntity[];
    salva(dadosProduto: ProdutoEntity): ProdutoEntity;
    private buscaPorId;
    atualiza(id: string, dadosProduto: Partial<ProdutoEntity>): Promise<ProdutoEntity>;
    remove(id: string): Promise<ProdutoEntity>;
}
