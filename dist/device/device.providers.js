"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.device_providers = void 0;
const device_entity_1 = require("./device.entity");
exports.device_providers = [
    {
        provide: 'device_REPOSITORY',
        useValue: device_entity_1.device,
    },
];
//# sourceMappingURL=device.providers.js.map