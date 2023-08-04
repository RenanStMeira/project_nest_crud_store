import { Body, Controller, Post, Query } from "@nestjs/common";
import { OrderService } from "./order.service";
import { CreateOrderDto } from "./dto/create-order.dto";

@Controller('pedidos')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post()
  async createOrder(
    @Query('usuarioId') userId: string,
    @Body() dadosDoPedido: CreateOrderDto,
  ) {
    const orderCreate = await this.orderService.createdOrder(
      userId,
      dadosDoPedido,
    )
    return orderCreate
  }
}
