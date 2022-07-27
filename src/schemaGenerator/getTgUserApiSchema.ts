import path from 'path';
import { TgUserApiSchema } from './types/TgUserApiSchema';
import { TgUserApiJSONSchema } from './types/TgUserApiJSONSchema';
import { readJSONFile } from '../utils/file/readJSONFile';
import { parseTgUserApiSchemaConstructors } from './parsers/parseTgUserApiSchemaConstructors';
import { parseTgUserApiSchemaMethods } from './parsers/parseTgUserApiSchemaMethods';
import { groupBy } from '../utils/groupBy';

export const getTgUserApiSchema = async (): Promise<TgUserApiSchema> => {
    const tgUserApiJSONSchema = await readJSONFile<TgUserApiJSONSchema>(path.resolve(__dirname, './tgUserApiSchema139.json'));
    const constructors = parseTgUserApiSchemaConstructors(tgUserApiJSONSchema.constructors);
    const constructorsByType = groupBy(constructors, (it) => it.groupTypeName);
    const methods = parseTgUserApiSchemaMethods(tgUserApiJSONSchema.methods);

    return {
        constructors,
        constructorsByType,
        methods,
    };
};
