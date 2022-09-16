"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.device_content_providers = void 0;
const device_content_entity_1 = require("./device_content.entity");
exports.device_content_providers = [
    {
        provide: 'device_content_REPOSITORY',
        useValue: device_content_entity_1.device_content,
    },
];
//# sourceMappingURL=device_content.providers.js.map