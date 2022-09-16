import { Repository } from 'typeorm';
import { unit_conversion } from './unit_conversion.entity';
export declare class unit_conversion_service {
    private unit_conversion_repository;
    constructor(unit_conversion_repository: Repository<unit_conversion>);
}
