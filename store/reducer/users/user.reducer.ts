import { createRedux, createRequest } from "@/utils/redux-toolkit";
import { QUERY_USER_INFO } from "@/store/actions";

export const queryUserInfor = createRequest(QUERY_USER_INFO, '', 'post', 'GRAPHQL');
const userInfo = createRedux('userInfo', [queryUserInfor]);

export const clearUserInfo = userInfo.actions.clear;
export default userInfo.reducer;