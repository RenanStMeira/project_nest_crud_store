import { OrderEntity } from '../Order/order.entity';
export declare class UsuarioEntity {
    id: string;
    nome: string;
    email: string;
    senha: string;
    createdAt: string;
    updatedAt: string;
    deletedAt: string;
    oders: OrderEntity[];
}
