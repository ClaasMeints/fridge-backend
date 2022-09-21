import { fridge_user } from './fridge_user.entity';

export const fridge_user_providers = [
  {
    provide: 'FRIDGE_USER_REPOSITORY',
    useValue: fridge_user,
  },
];
