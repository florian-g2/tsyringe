"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const reflection_helpers_1 = require("../reflection-helpers");
function injectable() {
    return function (target) {
        const paramInfo = reflection_helpers_1.getParamInfo(target);
        Reflect.defineMetadata(reflection_helpers_1.PARAM_INFOS_METADATA_KEY, paramInfo, target);
    };
}
exports.default = injectable;
