import { unit_conversion } from './unit_conversion.entity';

export const unit_conversion_providers = [
  {
    provide: 'UNIT_CONVERSION_REPOSITORY',
    useValue: unit_conversion,
  },
];
