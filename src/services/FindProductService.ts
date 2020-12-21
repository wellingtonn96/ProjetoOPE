import { connection } from '../database/dbConnection';
import AppError from '../errors/AppError';
import { Product } from '../models/Product';
import { ProductRepository } from '../repositories/ProductRepository';

class FindProductService {
  public async execute(id: string): Promise<Product> {
    const productRepository = new ProductRepository(connection());

    const product = await productRepository.findOneById(id);

    if (!product) {
      throw new AppError('Product not Exists');
    }

    return product;
  }
}

export { FindProductService };
