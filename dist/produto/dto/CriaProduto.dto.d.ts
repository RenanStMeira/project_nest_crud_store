export declare class CaracteristicaProdutoDTO {
    nome: string;
    descricao: string;
}
export declare class ImagemProdutoDTO {
    url: string;
    descricao: string;
}
export declare class CriaProdutoDTO {
    usuarioId: string;
    nome: string;
    valor: number;
    quantidade: number;
    descricao: string;
    caracteristicas: CaracteristicaProdutoDTO[];
    imagens: ImagemProdutoDTO[];
    categoria: string;
}
