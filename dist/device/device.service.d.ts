import { Repository } from 'typeorm';
import { device } from './device.entity';
export declare class device_service {
    private device_repository;
    constructor(device_repository: Repository<device>);
}
