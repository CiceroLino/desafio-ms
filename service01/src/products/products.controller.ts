import { Controller, Post, Body, Get, Inject } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { Producer } from 'kafkajs';

@Controller('products')
export class ProductsController {
  constructor(
    private readonly productsService: ProductsService,
    @Inject('KAFKA_PRODUCER')
    private kafkaProducer: Producer,
  ) {}

  @Get()
  findObject() {
    return this.productsService.returnObject();
  }

  @Post()
  create(@Body() createProductDto: CreateProductDto) {
    return this.productsService.create(createProductDto);
  }

  @Post('producer')
  async createProduct(@Body() body) {
    await this.kafkaProducer.send({
      topic: 'topico-test-development',
      messages: [{ key: 'storage', value: JSON.stringify(body) }],
    });
    return 'Message published';
  }
}
