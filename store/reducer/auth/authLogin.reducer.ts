import { QUERY_AUTH_LOGIN } from "@/store/actions";
import { createRedux, createRequest } from "@/utils/redux-toolkit";

export const queryAuthLogin = createRequest(QUERY_AUTH_LOGIN, '', 'post', 'GRAPHQL');
const authLogin = createRedux('authLogin', [queryAuthLogin]);

export default authLogin.reducer;