"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.product_providers = void 0;
const product_entity_1 = require("./product.entity");
exports.product_providers = [
    {
        provide: 'product_REPOSITORY',
        useValue: product_entity_1.product,
    },
];
//# sourceMappingURL=product.providers.js.map