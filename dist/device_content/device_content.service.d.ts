import { Repository } from 'typeorm';
import { device_content } from './device_content.entity';
export declare class device_content_service {
    private device_content_repository;
    constructor(device_content_repository: Repository<device_content>);
}
