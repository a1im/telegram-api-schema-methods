import { TgUserApiJSONSchemaMethod } from '../types/TgUserApiJSONSchema';
import { TgUserApiSchemaMethod } from '../types/TgUserApiSchema';
import { parseTgUserApiSchemaParams } from './parseTgUserApiSchemaParams';
import { parseTgUserApiTypeName } from './parseTgUserApiTypeName';

export const parseTgUserApiSchemaMethods = (methods: TgUserApiJSONSchemaMethod[]): TgUserApiSchemaMethod[] => methods
    .map((method) => ({
        method: method.method,
        params: parseTgUserApiSchemaParams(method.params),
        methodName: parseTgUserApiTypeName(method.method, false).typeName,
        returnTypeName: parseTgUserApiTypeName(method.type).typeName,
    }));
