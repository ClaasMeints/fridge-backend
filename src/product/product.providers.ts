import { product } from './product.entity';

export const product_providers = [
  {
    provide: 'PRODUCT_REPOSITORY',
    useValue: product,
  },
];
