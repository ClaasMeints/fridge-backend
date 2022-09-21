import { shopping_list } from './shopping_list.entity';

export const shopping_list_providers = [
  {
    provide: 'SHOPPING_LIST_REPOSITORY',
    useValue: shopping_list,
  },
];
