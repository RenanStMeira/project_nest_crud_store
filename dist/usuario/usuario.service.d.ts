import { UsuarioEntity } from './usuario.entity';
import { Repository } from 'typeorm';
import { ListaUsuarioDTO } from './dto/ListaUsuario.dto';
export declare class UsuarioService {
    private readonly usuarioRepository;
    constructor(usuarioRepository: Repository<UsuarioEntity>);
    criaUsuario(usuarioEntity: UsuarioEntity): Promise<void>;
    listaUsuarios(): Promise<ListaUsuarioDTO[]>;
}
