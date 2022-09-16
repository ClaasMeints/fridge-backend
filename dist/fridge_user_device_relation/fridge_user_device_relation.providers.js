"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fridge_user_device_relation_providers = void 0;
const fridge_user_device_relation_entity_1 = require("./fridge_user_device_relation.entity");
exports.fridge_user_device_relation_providers = [
    {
        provide: 'fridge_user_device_relation_REPOSITORY',
        useValue: fridge_user_device_relation_entity_1.fridge_user_device_relation,
    },
];
//# sourceMappingURL=fridge_user_device_relation.providers.js.map