"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports. = void 0;
from;
'@nestjs/common';
from;
'express';
{
    0;
}
_service;
from;
'./{0}.service';
{
    0;
}
_interface;
from;
'./{0}.interface';
{
    0;
}
_dto;
from;
'./{0}.dto';
from;
'@nestjs/common/exceptions/http.exception';
from;
'../fridge_user/fridge_user.decorator';
from;
'@nestjs/swagger';
let default_1 = class {
};
default_1 = __decorate([
    ApiTags('{0}'),
    ApiBearerAuth(),
    Controller('{0}')
], default_1);
_controller;
{
    {
        constructor(private, readonly, _, { 0:  }, _service, { 0:  }, _service);
        {
            { }
        }
        findAll();
        Promise < { 0:  };
        _interface[] > {};
        {
            return await this._;
            {
                0;
            }
            _service.findAll();
        }
    }
    findOne();
    id: string;
    Promise < { 0:  };
    _interface > {};
    {
        return await this._;
        {
            0;
        }
        _service.findOne(id);
    }
}
create();
{
    0;
}
_dto: {
    0;
}
_dto;
Promise < { 0:  };
_interface > {};
{
    return await this._;
    {
        0;
    }
    _service.create({ 0:  }, _dto);
}
update();
id: string, ;
{
    0;
}
_dto: {
    0;
}
_dto;
Promise < { 0:  };
_interface > {};
{
    return await this._;
    {
        0;
    }
    _service.update(id, { 0:  }, _dto);
}
delete ();
id: string;
Promise < { 0:  };
_interface > {};
{
    return await this._;
    {
        0;
    }
    _service.delete(id);
}
//# sourceMappingURL=blueprint.controller.js.map