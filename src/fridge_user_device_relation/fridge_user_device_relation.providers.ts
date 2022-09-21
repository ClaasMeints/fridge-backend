import { fridge_user_device_relation } from './fridge_user_device_relation.entity';

export const fridge_user_device_relation_providers = [
  {
    provide: 'FRIDGE_USER_DEVICE_RELATION_REPOSITORY',
    useValue: fridge_user_device_relation,
  },
];
