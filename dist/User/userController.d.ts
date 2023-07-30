import { AtualizaUsuarioDTO } from './dto/updateUsers.dto';
import { CriaUsuarioDTO } from './dto/createUsers.dto';
import { ListaUsuarioDTO } from './dto/findUsers.dto';
import { UsuarioRepository } from './userrepository';
import { UsuarioService } from './userService';
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
        usuario: void;
        messagem: string;
    }>;
    removeUsuario(id: string): Promise<{
        usuario: void;
        messagem: string;
    }>;
}
