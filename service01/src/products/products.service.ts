import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { v4 as uuidv4 } from 'uuid';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductsService {
  async create(createProductDto: CreateProductDto): Promise<Product> {
    const newProduct = await createProductDto;
    return newProduct;
  }

  async returnObject(): Promise<Product> {
    const uuidcode = await new uuidv4();

    return {
      name: 'A Product',
      code: uuidcode,
      amount: 10,
      isAvailable: true,
      price: 9.99,
    };
  }
}
