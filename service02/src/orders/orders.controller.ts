import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  UseFilters,
} from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { ValidationFilter } from 'src/filter/validate.filter';
import { Order } from './schema/order.schema';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Get()
  findAll() {
    return this.ordersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ordersService.findOne(+id);
  }

  @Post('/order')
  @UseFilters(new ValidationFilter())
  public async createUser(
    @Body() createOrderDto: CreateOrderDto,
  ): Promise<Order> {
    return this.ordersService.create(createOrderDto);
  }

  @Delete('order/:id')
  public async deleteAvatar(@Param('id') id: number): Promise<any> {
    this.ordersService.remove(id);
    return { message: 'Order successfully deleted!' };
  }
}
