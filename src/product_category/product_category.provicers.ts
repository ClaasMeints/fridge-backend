import { product_category } from './product_category.entity';

export const product_category_providers = [
  {
    provide: 'PRODUCT_CATEGORY_REPOSITORY',
    useValue: product_category,
  },
];
