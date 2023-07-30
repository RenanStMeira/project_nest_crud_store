"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioRepository = void 0;
const common_1 = require("@nestjs/common");
let UsuarioRepository = class UsuarioRepository {
    constructor() {
        this.usuarios = [];
    }
    async salvar(usuario) {
        this.usuarios.push(usuario);
    }
    async listar() {
        return this.usuarios;
    }
    async existeComEmail(email) {
        const possivelUsuario = this.usuarios.find((usuario) => usuario.email === email);
        return possivelUsuario !== undefined;
    }
    buscaPorId(id) {
        const possivelUsuario = this.usuarios.find((usuarioSalvo) => usuarioSalvo.id === id);
        if (!possivelUsuario) {
            throw new Error('Usuário não existe');
        }
        return possivelUsuario;
    }
    async atualiza(id, dadosDeAtualizacao) {
        const usuario = this.buscaPorId(id);
        Object.entries(dadosDeAtualizacao).forEach(([chave, valor]) => {
            if (chave === 'id') {
                return;
            }
            usuario[chave] = valor;
        });
        return usuario;
    }
    async remove(id) {
        const usuario = this.buscaPorId(id);
        this.usuarios = this.usuarios.filter((usuarioSalvo) => usuarioSalvo.id !== id);
        return usuario;
    }
};
UsuarioRepository = __decorate([
    (0, common_1.Injectable)()
], UsuarioRepository);
exports.UsuarioRepository = UsuarioRepository;
//# sourceMappingURL=userrepository.js.map