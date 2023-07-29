import { UsuarioEntity } from './usuario.entity';
export declare class UsuarioRepository {
    private usuarios;
    salvar(usuario: UsuarioEntity): Promise<void>;
    listar(): Promise<UsuarioEntity[]>;
    existeComEmail(email: string): Promise<boolean>;
    private buscaPorId;
    atualiza(id: string, dadosDeAtualizacao: Partial<UsuarioEntity>): Promise<UsuarioEntity>;
    remove(id: string): Promise<UsuarioEntity>;
}
