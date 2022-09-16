"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.required_content_providers = void 0;
const required_content_entity_1 = require("./required_content.entity");
exports.required_content_providers = [
    {
        provide: 'required_content_REPOSITORY',
        useValue: required_content_entity_1.required_content,
    },
];
//# sourceMappingURL=required_content.providers.js.map