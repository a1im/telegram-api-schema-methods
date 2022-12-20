import fs from 'fs';
import path from 'path';
import { getTgUserApiSchema } from './getTgUserApiSchema';
import { readFile } from '../utils/file/readFile';
import { indent } from '../utils/indent';
import { uncapitalizeFirstChar } from '../utils/string/uncapitalizeFirstChar';

export const generateTgUserApiSchemaMethods = async () => {
    const tgUserApiSchema = await getTgUserApiSchema();
    const tgUserApiRequestFile = await readFile(path.resolve(__dirname, './tgUserApiRequest.ts'));
    const constructorsTypes = tgUserApiSchema.constructors
        .map((constructor) => {
            const params = constructor.params
                .map((param) => `${param.propName}${param.isMaybe ? '?' : ''}: ${param.typeName}`);
            const setParams = constructor.params
                .map((param) => `this.${param.propName} = options.${param.propName};`);
            const isMaybeOptions = constructor.params.every((param) => param.isMaybe);

            return [
                `export class ${constructor.typeName} {`,
                `    _ = '${constructor.predicate}' as const`,
                ...indent(params, 4),
                ...params.length ? indent([
                    'constructor(options: {',
                    ...indent(params, 4),
                    `}${isMaybeOptions ? ' = {}' : ''}) {`,
                    ...indent(setParams, 4),
                    '}',
                ], 4) : [],
                '}',
            ].filter(Boolean).join('\n');
        });
    const groupConstructorsTypes = Object.entries(tgUserApiSchema.constructorsByType)
        .map(([groupTypeName, constructors]) => {
            const isMaybe = Boolean(constructors.length > 1);
            const types = constructors.map((it) => {
                const propName = uncapitalizeFirstChar(it.typeName.replace('Predicate', ''));

                return `${propName}${isMaybe ? '?' : ''}: ${it.typeName}`;
            });

            return [
                `export interface ${groupTypeName} {`,
                ...indent(types, 4),
                '}',
            ].join('\n');
        });
    const methods = tgUserApiSchema.methods
        .map((itMethod) => {
            const params = itMethod.params
                .map((param) => `    ${param.propName}?: ${param.typeName}`)
                .join('\n');

            return [
                `export const ${itMethod.methodName} = (dependencies: TgUserApiDependencies) => async (params: {`,
                params,
                `} = {}, ...args: any[]) => tgUserApiRequest(dependencies)<${itMethod.returnTypeName}>('${itMethod.method}', params, ...args);`,
            ].join('\n');
        });
    const makeTgUserApiMethods = [
        'export const makeTgUserApiMethods = (dependencies: TgUserApiDependencies) => ({',
        ...indent(
            tgUserApiSchema.methods
                .map((itMethod) => `${itMethod.methodName}: ${itMethod.methodName}(dependencies),`),
            4,
        ),
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
