import { product_class } from './product_class.entity';

export const product_class_providers = [
  {
    provide: 'PRODUCT_CLASS_REPOSITORY',
    useValue: product_class,
  },
];
