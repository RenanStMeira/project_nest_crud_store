import { AtualizaProdutoDTO } from './dto/updateproduct.dto';
import { CriaProdutoDTO } from './dto/createProduct.dto';
import { ProdutoEntity } from './product.entity';
import { ProdutoRepository } from './productRepository';
export declare class ProdutoController {
    private readonly produtoRepository;
    constructor(produtoRepository: ProdutoRepository);
    criaNovo(dadosProduto: CriaProdutoDTO): Promise<ProdutoEntity>;
    listaTodos(): Promise<ProdutoEntity[]>;
    atualiza(id: string, dadosProduto: AtualizaProdutoDTO): Promise<{
        mensagem: string;
        produto: ProdutoEntity;
    }>;
    remove(id: string): Promise<{
        mensagem: string;
        produto: ProdutoEntity;
    }>;
}
