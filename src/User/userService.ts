import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ListaProdutoDTO } from '../Product/dto/findProduct.dto';
import { UsuarioEntity } from './user.entity';
import { Repository } from 'typeorm';
import { ListaUsuarioDTO } from './dto/findUsers.dto';
import { AtualizaUsuarioDTO } from './dto/updateUsers.dto';

@Injectable()
export class UsuarioService {
    constructor (
        @InjectRepository(UsuarioEntity)
        private readonly usuarioRepository: Repository<UsuarioEntity>
    ) {}

    async criaUsuario(usuarioEntity: UsuarioEntity) {
        await this.usuarioRepository.save(usuarioEntity);
    }

    async listaUsuarios() {
        const usuariosSalvos = await this.usuarioRepository.find();
        const usuariosLista = usuariosSalvos.map(
            (usuario) => new ListaUsuarioDTO(usuario.id, usuario.nome)
        )

        return usuariosLista;
    }

    async atualizausuario(id: string, usuarioEntity: AtualizaUsuarioDTO) {
       await this.usuarioRepository.update(id, usuarioEntity);
    }

    async deletaUsuario(id: string) {
        await this.usuarioRepository.delete(id);
    }

}