import { OrderEntity } from './order.entity';
import { Repository } from 'typeorm';
import { UsuarioEntity } from 'src/User/user.entity';
export declare class OrderService {
    private readonly orderRepository;
    private readonly userRepository;
    constructor(orderRepository: Repository<OrderEntity>, userRepository: Repository<UsuarioEntity>);
    createdOrder(userId: string): Promise<OrderEntity>;
}
