import { Repository } from 'typeorm';
import { required_content } from './required_content.entity';
export declare class required_content_service {
    private required_content_repository;
    constructor(required_content_repository: Repository<required_content>);
}
