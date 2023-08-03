import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { OrderEntity } from './order.entity';
import { Repository } from 'typeorm';
import { UsuarioEntity } from 'src/User/user.entity';
import { StatusPedido } from './Enum/statusPedido.enum';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(OrderEntity)
    private readonly orderRepository: Repository<OrderEntity>,

    @InjectRepository(UsuarioEntity)
    private readonly userRepository: Repository<UsuarioEntity>,
  ) {}

  async createdOrder(userId: string){
    const user = await this.userRepository.findOneBy({ id: userId });
    const orderEntity = new OrderEntity();

    orderEntity.valorTotal = 0;
    orderEntity.status = StatusPedido.EM_PROCESSAMENTO;
    orderEntity.user = user;

    const orderCreated = await this.orderRepository.save(orderEntity)
    return orderCreated;
  }
}
