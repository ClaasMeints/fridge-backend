import { Sequelize } from 'sequelize-typescript';
import { config } from '../config';
import { device } from '../device/device.entity';
import { device_content } from '../device_content/device_content.entity';
import { fridge_user } from '../fridge_user/fridge_user.entity';
import { fridge_user_device_relation } from '../fridge_user_device_relation/fridge_user_device_relation.entity';
import { product } from '../product/product.entity';
import { product_category } from '../product_category/product_category.entity';
import { product_class } from '../product_class/product_class.entity';
import { required_content } from '../required_content/required_content.entity';
import { shopping_list } from '../shopping_list/shopping_list.entity';
import { unit } from '../unit/unit.entity';
import { unit_conversion } from '../unit_conversion/unit_conversion.entity';

const sequelize = new Sequelize(config.database);
sequelize.addModels([
  device,
  device_content,
  fridge_user,
  fridge_user_device_relation,
  product,
  product_category,
  product_class,
  required_content,
  shopping_list,
  unit,
  unit_conversion,
]);
sequelize.sync();

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      return sequelize;
    },
  },
];
