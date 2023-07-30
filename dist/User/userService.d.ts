import { UsuarioEntity } from './user.entity';
import { Repository } from 'typeorm';
import { ListaUsuarioDTO } from './dto/findUsers.dto';
import { AtualizaUsuarioDTO } from './dto/updateUsers.dto';
export declare class UsuarioService {
    private readonly usuarioRepository;
    constructor(usuarioRepository: Repository<UsuarioEntity>);
    criaUsuario(usuarioEntity: UsuarioEntity): Promise<void>;
    listaUsuarios(): Promise<ListaUsuarioDTO[]>;
    atualizausuario(id: string, usuarioEntity: AtualizaUsuarioDTO): Promise<void>;
    deletaUsuario(id: string): Promise<void>;
}
