import { device } from './device.entity';

export const device_providers = [
  {
    provide: 'DEVICE_REPOSITORY',
    useValue: device,
  },
];
