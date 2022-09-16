import { Repository } from 'typeorm';
import { product } from './product.entity';
export declare class product_service {
    private product_repository;
    constructor(product_repository: Repository<product>);
}
