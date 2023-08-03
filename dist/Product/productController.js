"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProdutoController = void 0;
const common_1 = require("@nestjs/common");
const crypto_1 = require("crypto");
const updateproduct_dto_1 = require("./dto/updateproduct.dto");
const createProduct_dto_1 = require("./dto/createProduct.dto");
const product_entity_1 = require("./product.entity");
const productRepository_1 = require("./productRepository");
let ProdutoController = class ProdutoController {
    constructor(produtoRepository) {
        this.produtoRepository = produtoRepository;
    }
    async criaNovo(dadosProduto) {
        const produto = new product_entity_1.ProdutoEntity();
        produto.id = (0, crypto_1.randomUUID)();
        produto.nome = dadosProduto.nome;
        produto.usuarioId = dadosProduto.usuarioId;
        produto.valor = dadosProduto.valor;
        produto.quantidadeDisponivel = dadosProduto.quantidade;
        produto.descricao = dadosProduto.descricao;
        produto.categoria = dadosProduto.categoria;
        produto.caracteristicas = dadosProduto.caracteristicas;
        produto.imagens = dadosProduto.imagens;
        const produtoCadastrado = this.produtoRepository.salva(produto);
        return produtoCadastrado;
    }
    async listaTodos() {
        return this.produtoRepository.listaTodos();
    }
    async atualiza(id, dadosProduto) {
        const produtoAlterado = await this.produtoRepository.atualiza(id, dadosProduto);
        return {
            mensagem: 'produto atualizado com sucesso',
            produto: produtoAlterado,
        };
    }
    async remove(id) {
        const produtoRemovido = await this.produtoRepository.remove(id);
        return {
            mensagem: 'produto removido com sucesso',
            produto: produtoRemovido,
        };
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [createProduct_dto_1.CriaProdutoDTO]),
    __metadata("design:returntype", Promise)
], ProdutoController.prototype, "criaNovo", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProdutoController.prototype, "listaTodos", null);
__decorate([
    (0, common_1.Put)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, updateproduct_dto_1.AtualizaProdutoDTO]),
    __metadata("design:returntype", Promise)
], ProdutoController.prototype, "atualiza", null);
__decorate([
    (0, common_1.Delete)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProdutoController.prototype, "remove", null);
ProdutoController = __decorate([
    (0, common_1.Controller)('produtos'),
    __metadata("design:paramtypes", [productRepository_1.ProdutoRepository])
], ProdutoController);
exports.ProdutoController = ProdutoController;
//# sourceMappingURL=productController.js.map