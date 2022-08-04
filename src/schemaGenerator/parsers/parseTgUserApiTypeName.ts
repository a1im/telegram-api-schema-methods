import { snakeToCamelCase } from '../../utils/string/snakeToCamelCase';

const BaseTypeByName: Record<string, string> = {
    int: 'number',
    long: 'string',
    double: 'number',
    bytes: 'Uint8Array',
    string: 'string',
    null: 'undefined',
    true: 'true',
    bool: 'boolean',
    x: 'any',
    '!x': 'any',
};

export const parseTgUserApiTypeName = (type: string, isUpperFirstChar = true) => {
    const [, flagType] = type.match(/^flags.[0-9]+\?(.*)/) ?? [];
    const [, vectorType] = type.match(/Vector<(.+)>/) ?? [];
    const isFlag = Boolean(flagType);
    const isVector = Boolean(vectorType);
    const isMaybe = isFlag;
    const tmpType = vectorType || flagType || type;
    const baseType = BaseTypeByName[tmpType.toLowerCase()];
    let typeName: string;

    typeName = baseType ?? tmpType;
    typeName = snakeToCamelCase(
        typeName.replace(/([a-z])\.([a-z])/gsui, '$1_$2'),
    );
    typeName = isVector ? `${typeName}[]` : typeName;

    if (isUpperFirstChar && !baseType) {
        typeName = `${typeName.slice(0, 1).toUpperCase()}${typeName.slice(1)}`;
    }

    return {
        isMaybe,
        typeName,
    };
};
