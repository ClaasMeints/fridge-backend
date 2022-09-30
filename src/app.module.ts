import { Module } from '@nestjs/common';
import { device_module } from './device/device.module';
import { device_content_module } from './device_content/device_content.module';
import { fridge_user_module } from './fridge_user/fridge_user.module';
import { fridge_user_device_relation_module } from './fridge_user_device_relation/fridge_user_device_relation.module';
import { product_module } from './product/product.module';
import { product_category_module } from './product_category/product_category.module';
import { product_class_module } from './product_class/product_class.module';
import { unit_module } from './unit/unit.module';
import { unit_conversion_module } from './unit_conversion/unit_conversion.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [
    DatabaseModule,
    device_module,
    device_content_module,
    fridge_user_module,
    fridge_user_device_relation_module,
    product_module,
    product_category_module,
    product_class_module,
    unit_module,
    unit_conversion_module,
  ],
})
export class AppModule {}
