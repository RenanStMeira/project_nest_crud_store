import { OrderService } from "./order.service";
export declare class OrderController {
    private readonly orderService;
    constructor(orderService: OrderService);
    createOrder(userId: string): Promise<import("./order.entity").OrderEntity>;
}
