import {{ Module }} from '@nestjs/common';
import {{ TypeOrmModule }} from '@nestjs/typeorm';
import {{ {0}_controller }} from './{0}.controller';
import {{ {0}_service }} from './{0}.service';
import {{ {0} }} from './{0}.entity';

@Module({{
  imports: [TypeOrmModule.forFeature([{0}])],
  controllers: [{0}_controller],
  providers: [{0}_service],
  exports: [{0}_service],
}})
export class {0}_module {{}}