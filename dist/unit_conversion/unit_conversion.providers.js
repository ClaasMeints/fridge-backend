"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.unit_conversion_providers = void 0;
const unit_conversion_entity_1 = require("./unit_conversion.entity");
exports.unit_conversion_providers = [
    {
        provide: 'unit_conversion_REPOSITORY',
        useValue: unit_conversion_entity_1.unit_conversion,
    },
];
//# sourceMappingURL=unit_conversion.providers.js.map