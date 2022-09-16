"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.product_class_providers = void 0;
const product_class_entity_1 = require("./product_class.entity");
exports.product_class_providers = [
    {
        provide: 'product_class_REPOSITORY',
        useValue: product_class_entity_1.product_class,
    },
];
//# sourceMappingURL=product_class.providers.js.map