import { unit } from './unit.entity';

export const unit_providers = [
  {
    provide: 'UNIT_REPOSITORY',
    useValue: unit,
  },
];
