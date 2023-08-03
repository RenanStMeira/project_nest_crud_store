import { Controller, Post, Query } from "@nestjs/common";
import { OrderService } from "./order.service";

@Controller('pedidos')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post()
  async createOrder(
    @Query('usuarioId') userId: string,
  ) {
    const orderCreate = await this.orderService.createdOrder(
      userId
    )
    return orderCreate
  }
}
