import { Repository } from 'typeorm';
import { product_class } from './product_class.entity';
export declare class product_class_service {
    private product_class_repository;
    constructor(product_class_repository: Repository<product_class>);
}
