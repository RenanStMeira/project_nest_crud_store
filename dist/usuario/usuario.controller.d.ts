import { AtualizaUsuarioDTO } from './dto/AtualizaUsuario.dto';
import { CriaUsuarioDTO } from './dto/CriaUsuario.dto';
import { ListaUsuarioDTO } from './dto/ListaUsuario.dto';
import { UsuarioEntity } from './usuario.entity';
import { UsuarioRepository } from './usuario.repository';
import { UsuarioService } from './usuario.service';
export declare class UsuarioController {
    private usuarioRepository;
    private usuarioService;
    constructor(usuarioRepository: UsuarioRepository, usuarioService: UsuarioService);
    criaUsuario(dadosDoUsuario: CriaUsuarioDTO): Promise<{
        usuario: ListaUsuarioDTO;
        messagem: string;
    }>;
    listUsuarios(): Promise<ListaUsuarioDTO[]>;
    atualizaUsuario(id: string, novosDados: AtualizaUsuarioDTO): Promise<{
        usuario: UsuarioEntity;
        messagem: string;
    }>;
    removeUsuario(id: string): Promise<{
        usuario: UsuarioEntity;
        messagem: string;
    }>;
}
