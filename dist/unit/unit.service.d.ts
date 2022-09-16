import { Repository } from 'typeorm';
import { unit } from './unit.entity';
export declare class unit_service {
    private unit_repository;
    constructor(unit_repository: Repository<unit>);
}
