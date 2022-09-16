import { Repository } from 'typeorm';
import { fridge_user } from './fridge_user.entity';
export declare class fridge_user_service {
    private fridge_user_repository;
    constructor(fridge_user_repository: Repository<fridge_user>);
}
