export interface TgUserApiSchemaParam {
    isMaybe: boolean
    propName: string
    typeName: string
}
export interface TgUserApiSchemaConstructor {
    params: TgUserApiSchemaParam[]
    predicate: string
    typeName: string
    groupTypeName: string
}
export interface TgUserApiSchemaMethod {
    params: TgUserApiSchemaParam[]
    method: string
    methodName: string
    returnTypeName: string
}
export interface TgUserApiSchema {
    constructors: TgUserApiSchemaConstructor[]
    constructorsByType: Record<any, TgUserApiSchemaConstructor[]>
    methods: TgUserApiSchemaMethod[]
}
