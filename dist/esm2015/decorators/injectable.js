import { getParamInfo, PARAM_INFOS_METADATA_KEY } from "../reflection-helpers";
function injectable() {
    return function (target) {
        const paramInfo = getParamInfo(target);
        Reflect.defineMetadata(PARAM_INFOS_METADATA_KEY, paramInfo, target);
    };
}
export default injectable;
