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
'@nestjs/typeorm';
{
    0;
}
_controller;
from;
'./{0}.controller';
{
    0;
}
_providers;
from;
'./{0}.providers';
{
    0;
}
_service;
from;
'./{0}.service';
from;
'../database/database.module';
let default_1 = class {
};
default_1 = __decorate([
    Module({}, {
        imports: [database_module],
        controllers: [{ 0:  }, _controller],
        providers: [{ 0:  }, _service,
            ...{ 0:  }, _providers
        ],
    })
], default_1);
_module;
{
    { }
}
//# sourceMappingURL=blueprint.module.js.map