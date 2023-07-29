declare class CaracteristicaProduto {
    nome: string;
    descricao: string;
}
declare class ImagemProduto {
    url: string;
    descricao: string;
}
export declare class ProdutoEntity {
    id: string;
    usuarioId: string;
    nome: string;
    valor: number;
    quantidade: number;
    descricao: string;
    categoria: string;
    caracteristicas: CaracteristicaProduto[];
    imagens: ImagemProduto[];
}
export {};
