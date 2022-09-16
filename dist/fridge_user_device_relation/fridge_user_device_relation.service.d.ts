import { Repository } from 'typeorm';
import { fridge_user_device_relation } from './fridge_user_device_relation.entity';
export declare class fridge_user_device_relation_service {
    private fridge_user_device_relation_repository;
    constructor(fridge_user_device_relation_repository: Repository<fridge_user_device_relation>);
}
