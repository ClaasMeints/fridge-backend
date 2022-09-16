"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.product_category_providers = void 0;
const product_category_entity_1 = require("./product_category.entity");
exports.product_category_providers = [
    {
        provide: 'product_category_REPOSITORY',
        useValue: product_category_entity_1.product_category,
    },
];
//# sourceMappingURL=product_category.providers.js.map