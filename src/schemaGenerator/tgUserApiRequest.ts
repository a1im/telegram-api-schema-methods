export interface TgUserApiRequestResponseSuccess<Data = any> {
    success: true
    data: Data
    error: undefined
}

export interface TgUserApiRequestResponseError {
    success: false
    data: undefined
    error: any
}

export type TgUserApiRequestResponse<Data = any> = TgUserApiRequestResponseSuccess<Data> | TgUserApiRequestResponseError;

export interface TgUserApiRequest {
    (method: string, params: any): Promise<any>
}

export interface TgUserApiDependencies {
    request: TgUserApiRequest
}

export const tgUserApiRequest = (dependencies: TgUserApiDependencies) => async <Data = any>(method: string, params: any): Promise<TgUserApiRequestResponse<Data>> => dependencies.request(method, params)
    .then((data: any) => ({
        success: true,
        data,
        error: undefined,
    }))
    .catch((e) => {
        e.message = `tgUserApiRequest: ${e.message} ${JSON.stringify(params)}`;

        return {
            success: false,
            data: undefined,
            error: e,
        };
    });
