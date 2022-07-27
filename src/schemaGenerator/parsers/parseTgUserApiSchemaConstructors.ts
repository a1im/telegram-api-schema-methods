import { TgUserApiJSONSchemaConstructor } from '../types/TgUserApiJSONSchema';
import { TgUserApiSchemaConstructor } from '../types/TgUserApiSchema';
import { parseTgUserApiSchemaParams } from './parseTgUserApiSchemaParams';
import { parseTgUserApiTypeName } from './parseTgUserApiTypeName';

const TgUserApiSchemaExcludePredicates = [
    'boolFalse',
    'boolTrue',
    'true',
    'null',
    'vector',
];

export const parseTgUserApiSchemaConstructors = (constructors: TgUserApiJSONSchemaConstructor[]): TgUserApiSchemaConstructor[] => constructors
    .filter(({ predicate }) => !TgUserApiSchemaExcludePredicates.includes(predicate))
    .map((it) => ({
        params: parseTgUserApiSchemaParams(it.params),
        predicate: it.predicate,
        typeName: parseTgUserApiTypeName(`predicate_${it.predicate}`).typeName,
        groupTypeName: parseTgUserApiTypeName(it.type).typeName,
    }));
