import {{ Injectable }} from '@nestjs/common';
import {{ InjectRepository }} from '@nestjs/typeorm';
import {{ Repository }} from 'typeorm';
import {{ {0} }} from './{0}.entity';

@Injectable()
export class {0}_service {{
  constructor(
    @InjectRepository({0})
    private {0}_repository: Repository<{0}>,
  ) {{}}
}}