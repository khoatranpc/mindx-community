import { AxiosHeaders, Method, RawAxiosRequestHeaders } from "axios";

type MethodsHeaders = Partial<{
    [Key in Method as Lowercase<Key>]: AxiosHeaders;
} & { common: AxiosHeaders }>;

export interface Obj {
    [k: string]: any;
}

export interface Query {
    payload?: {
        queryParams?: Obj;
        body?: Obj;
        params?: string;
        headers?: (RawAxiosRequestHeaders & MethodsHeaders) | AxiosHeaders;
    }
    graphQl?: {
        query: string;
        variables: Obj;
    };
    componentId?: string
}

export interface Action extends Query {
    data: any;
    componentId?: string;
    isLoading?: boolean;
    success: boolean;
    error?: any;
    message?: string;
    statusCode?: number;
}
