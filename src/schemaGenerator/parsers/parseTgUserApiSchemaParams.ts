import { TgUserApiJSONSchemaParam } from '../types/TgUserApiJSONSchema';
import { TgUserApiSchemaParam } from '../types/TgUserApiSchema';
import { parseTgUserApiTypeName } from './parseTgUserApiTypeName';

export const parseTgUserApiSchemaParams = (params: TgUserApiJSONSchemaParam[]): TgUserApiSchemaParam[] => params
    .filter(({ type }) => type !== '#')
    .map((param) => {
        const {
            isMaybe,
            typeName,
        } = parseTgUserApiTypeName(param.type);

        return {
            isMaybe,
            propName: param.name,
            typeName,
        };
    });
