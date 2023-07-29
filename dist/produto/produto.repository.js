"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProdutoRepository = void 0;
const common_1 = require("@nestjs/common");
let ProdutoRepository = class ProdutoRepository {
    constructor() {
        this.produtos = [];
    }
    listaTodos() {
        return this.produtos;
    }
    salva(dadosProduto) {
        this.produtos.push(dadosProduto);
        return dadosProduto;
    }
    buscaPorId(id) {
        const possivelProduto = this.produtos.find((produto) => produto.id === id);
        if (!possivelProduto) {
            throw new Error('Produto não existe');
        }
        return possivelProduto;
    }
    async atualiza(id, dadosProduto) {
        const dadosNaoAtualizaveis = ['id', 'usuarioId'];
        const produto = this.buscaPorId(id);
        Object.entries(dadosProduto).forEach(([chave, valor]) => {
            if (dadosNaoAtualizaveis.includes(chave)) {
                return;
            }
            produto[chave] = valor;
        });
        return produto;
    }
    async remove(id) {
        const produtoRemovido = this.buscaPorId(id);
        this.produtos = this.produtos.filter((produto) => produto.id !== id);
        return produtoRemovido;
    }
};
ProdutoRepository = __decorate([
    (0, common_1.Injectable)()
], ProdutoRepository);
exports.ProdutoRepository = ProdutoRepository;
//# sourceMappingURL=produto.repository.js.map