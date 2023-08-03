import { StatusPedido } from './Enum/statusPedido.enum';
import { UsuarioEntity } from '../User/user.entity';
export declare class OrderEntity {
    id: string;
    valorTotal: number;
    status: StatusPedido;
    createdAt: string;
    updatedAt: string;
    deletedAt: string;
    user: UsuarioEntity;
}
