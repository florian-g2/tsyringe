import constructor from "./types/constructor";
import InjectionToken from "./providers/injection-token";
import { ParamInfo } from "./dependency-container";
import Transform from "./types/transform";
export declare const INJECTION_TOKEN_METADATA_KEY = "injectionTokens";
export declare const PARAM_INFOS_METADATA_KEY = "paramInfos";
export declare function getParamInfo(target: constructor<any>): ParamInfo[];
export declare function defineInjectionTokenMetadata(data: any, transform?: {
    transformToken: InjectionToken<Transform<any, any>>;
    args: any[];
}): (target: any, propertyKey: string | symbol, parameterIndex: number) => any;
