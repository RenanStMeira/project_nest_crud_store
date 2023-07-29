declare class ListaCaracteristicaProdutoDTO {
    nome: string;
    descricao: string;
}
declare class ListaImagemProdutoDTO {
    url: string;
    descricao: string;
}
export declare class ListaProdutoDTO {
    id: string;
    usuarioId: string;
    nome: string;
    valor: number;
    quantidade: number;
    descricao: string;
    categoria: string;
    caracteristicas: ListaCaracteristicaProdutoDTO[];
    imagens: ListaImagemProdutoDTO[];
}
export {};
