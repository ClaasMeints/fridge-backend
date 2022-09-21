import { device_content } from './device_content.entity';

export const device_content_providers = [
  {
    provide: 'DEVICE_CONTENT_REPOSITORY',
    useValue: device_content,
  },
];
