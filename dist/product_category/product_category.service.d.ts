import { Repository } from 'typeorm';
import { product_category } from './product_category.entity';
export declare class product_category_service {
    private product_category_repository;
    constructor(product_category_repository: Repository<product_category>);
}
