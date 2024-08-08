import axios from 'axios';
import { Action, Obj } from "@/global/interface";

const httpClient = axios.create({
    baseURL: process.env.NEXT_PUBLIC_SERVER_API,
});
httpClient.interceptors.request.use(function (config) {
    (config.headers as Obj).Authorization = localStorage.getItem('access_token') as string;
    return config;
}, function (error) {
    return Promise.reject(error);
});


const actionRequest = async (standardQuery: 'REST' | 'GRAPHQL', method: 'get' | 'post' | 'put' | 'delete', endpoint?: string, request?: Action) => {
    try {
        let response;
        switch (standardQuery) {
            case 'REST':
                let mapEndpoint = request?.payload?.params ? `${endpoint}/${request?.payload?.params}` : endpoint;
                response = await (httpClient[method] as any)(mapEndpoint, method === 'get' ? {
                    params: request?.payload?.queryParams ?? {}
                } : request?.payload?.body, ...method !== 'get' ? [{
                    ...request?.payload?.headers ? { headers: request?.payload?.headers } : {}
                }] : []);
            default:
                response = await httpClient.post('graphql', request?.graphQl, {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                break;
        }
        return response;
    } catch (error) {
        return {
            data: {
                isLoading: false,
                success: false,
                error,
                data: null,
                componentId: request?.componentId
            }
        }
    }
}
export default actionRequest;