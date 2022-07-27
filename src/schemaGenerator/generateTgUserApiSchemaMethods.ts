import fs from 'fs';
import path from 'path';
import { getTgUserApiSchema } from './getTgUserApiSchema';
import { readFile } from '../utils/file/readFile';

export const generateTgUserApiSchemaMethods = async () => {
    const tgUserApiSchema = await getTgUserApiSchema();
    const tgUserApiRequestFile = await readFile(path.resolve(__dirname, './tgUserApiRequest.ts'));
    const constructorsTypes = tgUserApiSchema.constructors
        .map((constructor) => {
            const params = constructor.params
                .map((param) => `    ${param.propName}${param.isMaybe ? '?' : ''}: ${param.typeName}`)
                .join('\n');

            return [
                `export interface ${constructor.typeName} {`,
                `    _: '${constructor.predicate}'`,
                params,
                '}',
            ].filter(Boolean).join('\n');
        });
    const groupConstructorsTypes = Object.entries(tgUserApiSchema.constructorsByType)
        .map(([groupTypeName, constructors]) => {
            const types = constructors.map((it) => it.typeName).join(' | ');

            return `export type ${groupTypeName} = ${types};`;
        });
    const methods = tgUserApiSchema.methods
        .map((itMethod) => {
            const params = itMethod.params
                .map((param) => `    ${param.propName}${param.isMaybe ? '?' : ''}: ${param.typeName}`)
                .join('\n');

            return [
                `export const ${itMethod.methodName} = (dependencies: TgUserApiDependencies) => async (params: {`,
                params,
                `}) => tgUserApiRequest(dependencies)<${itMethod.returnTypeName}>('${itMethod.method}', params);`,
            ].join('\n');
        });
    const makeTgUserApiMethods = [
        'export const makeTgUserApiMethods = (dependencies: TgUserApiDependencies) => ({',
        tgUserApiSchema.methods
            .map((itMethod) => `    ${itMethod.methodName}: ${itMethod.methodName}(dependencies),`)
            .join('\n'),
        '});',
    ].join('\n');

    fs.writeFileSync(
        path.resolve(__dirname, '../index.ts'),
        [
            constructorsTypes.join('\n\n'),
            '',
            groupConstructorsTypes.join('\n\n'),
            '',
            tgUserApiRequestFile.toString('utf8'),
            methods.join('\n\n'),
            '',
            makeTgUserApiMethods,
            '',
        ].join('\n'),
    );
};
