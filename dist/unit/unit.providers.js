"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.unit_providers = void 0;
const unit_entity_1 = require("./unit.entity");
exports.unit_providers = [
    {
        provide: 'unit_REPOSITORY',
        useValue: unit_entity_1.unit,
    },
];
//# sourceMappingURL=unit.providers.js.map