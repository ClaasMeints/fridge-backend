"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shopping_list_providers = void 0;
const shopping_list_entity_1 = require("./shopping_list.entity");
exports.shopping_list_providers = [
    {
        provide: 'shopping_list_REPOSITORY',
        useValue: shopping_list_entity_1.shopping_list,
    },
];
//# sourceMappingURL=shopping_list.providers.js.map