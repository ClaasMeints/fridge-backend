import { Repository } from 'typeorm';
import { shopping_list } from './shopping_list.entity';
export declare class shopping_list_service {
    private shopping_list_repository;
    constructor(shopping_list_repository: Repository<shopping_list>);
}
