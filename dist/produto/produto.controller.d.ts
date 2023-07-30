import { AtualizaProdutoDTO } from '../produto/dto/AtualizaProduto.dto';
import { CriaProdutoDTO } from './dto/CriaProduto.dto';
import { ProdutoEntity } from './produto.entity';
import { ProdutoRepository } from './produto.repository';
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
