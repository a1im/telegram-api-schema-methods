export interface TgUserApiJSONSchemaParam {
    name: string
    type: string
}
export interface TgUserApiJSONSchemaItem {
    id: string
    params: TgUserApiJSONSchemaParam[]
    type: string
}
export interface TgUserApiJSONSchemaConstructor extends TgUserApiJSONSchemaItem {
    predicate: string
}
export interface TgUserApiJSONSchemaMethod extends TgUserApiJSONSchemaItem {
    method: string
}
export interface TgUserApiJSONSchema {
    constructors: TgUserApiJSONSchemaConstructor[]
    methods: TgUserApiJSONSchemaMethod[]
}
