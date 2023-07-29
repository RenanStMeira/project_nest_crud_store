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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AtualizaProdutoDTO = void 0;
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const CriaProduto_dto_1 = require("./CriaProduto.dto");
class AtualizaProdutoDTO {
}
__decorate([
    (0, class_validator_1.IsUUID)(undefined, { message: 'ID do produto inválido' }),
    __metadata("design:type", String)
], AtualizaProdutoDTO.prototype, "id", void 0);
__decorate([
    (0, class_validator_1.IsUUID)(undefined, { message: 'ID de usuário inválido' }),
    __metadata("design:type", String)
], AtualizaProdutoDTO.prototype, "usuarioId", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'Nome do produto não pode ser vazio' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], AtualizaProdutoDTO.prototype, "nome", void 0);
__decorate([
    (0, class_validator_1.IsNumber)({ maxDecimalPlaces: 2, allowNaN: false, allowInfinity: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.Min)(1, { message: 'O valor precisa ser maior que zero' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], AtualizaProdutoDTO.prototype, "valor", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0, { message: 'Quantidade mínima inválida' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], AtualizaProdutoDTO.prototype, "quantidadeDisponivel", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], AtualizaProdutoDTO.prototype, "descricao", void 0);
__decorate([
    (0, class_validator_1.ValidateNested)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ArrayMinSize)(3),
    (0, class_transformer_1.Type)(() => CriaProduto_dto_1.CaracteristicaProdutoDTO),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Array)
], AtualizaProdutoDTO.prototype, "caracteristicas", void 0);
__decorate([
    (0, class_validator_1.ValidateNested)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ArrayMinSize)(1),
    (0, class_transformer_1.Type)(() => CriaProduto_dto_1.ImagemProdutoDTO),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Array)
], AtualizaProdutoDTO.prototype, "imagens", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'Categoria do produto não pode ser vazia' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], AtualizaProdutoDTO.prototype, "categoria", void 0);
exports.AtualizaProdutoDTO = AtualizaProdutoDTO;
//# sourceMappingURL=AtualizaProduto.dto.js.map