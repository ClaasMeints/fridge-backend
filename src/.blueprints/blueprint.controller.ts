import {{ Get, Post, Body, Put, Delete, Param, Controller, UsePipes }} from '@nestjs/common';
import {{ Request }} from 'express';
import {{ {0}_service }} from './{0}.service';
import {{ {0}_interface }} from './{0}.interface';
import {{ {0}_dto }} from './{0}.dto';
import {{ HttpException }} from '@nestjs/common/exceptions/http.exception';
import {{ fridge_user_decorator }} from '../fridge_user/fridge_user.decorator';

import {{ ApiBearerAuth, ApiTags }} from '@nestjs/swagger';

@ApiTags('{0}')
@ApiBearerAuth()
@Controller('{0}')
export class {0}_controller {{
    constructor(private readonly _{0}_service: {0}_service) {{}}
}}