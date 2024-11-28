import { IsEnum, IsNumber, IsPositive } from 'class-validator';
import { OrderStatus, OrderStatusList } from 'src/orders/enum/order.enum';

export class UpdateOrderStatusDto {
  @IsEnum(OrderStatusList, {
    message: `Status must be one of the following: ${Object.values(OrderStatusList)}`,
  })
  status: OrderStatus = OrderStatus.PENDING;
}
