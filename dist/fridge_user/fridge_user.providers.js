"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fridge_user_providers = void 0;
const fridge_user_entity_1 = require("./fridge_user.entity");
exports.fridge_user_providers = [
    {
        provide: 'fridge_user_REPOSITORY',
        useValue: fridge_user_entity_1.fridge_user,
    },
];
//# sourceMappingURL=fridge_user.providers.js.map