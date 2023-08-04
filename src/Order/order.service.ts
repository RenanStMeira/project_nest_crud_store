import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { OrderEntity } from './order.entity';
import { Repository } from 'typeorm';
import { UsuarioEntity } from 'src/User/user.entity';
import { StatusPedido } from './Enum/statusPedido.enum';
import { CreateOrderDto } from './dto/create-order.dto';
import { ItemOrderEntity } from './itemOrder.entity';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(OrderEntity)
    private readonly orderRepository: Repository<OrderEntity>,

    @InjectRepository(UsuarioEntity)
    private readonly userRepository: Repository<UsuarioEntity>,
  ) {}

  async createdOrder(userId: string, dadosDoPedido: CreateOrderDto){
    const user = await this.userRepository.findOneBy({ id: userId });
    const orderEntity = new OrderEntity();

    orderEntity.status = StatusPedido.EM_PROCESSAMENTO;
    orderEntity.user = user;

    const itensPedidosEntidades = dadosDoPedido.itensOrder.map((itemOrder) => {
      const itemOrderEntity = new ItemOrderEntity();

      itemOrderEntity.precoVenda = 10;
      itemOrderEntity.quantidade = itemOrder.quantidade;
      return itemOrderEntity;
    });

    const valorTotal = itensPedidosEntidades.reduce((total, item) => {
      return total + item.precoVenda * item.quantidade;
    }, 0);
    orderEntity.itensPedido = itensPedidosEntidades;

    orderEntity.valorTotal = valorTotal;

    const orderCreated = await this.orderRepository.save(orderEntity)
    return orderCreated;
  }
}
