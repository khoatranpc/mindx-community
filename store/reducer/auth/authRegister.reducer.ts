import { QUERY_USER_REGISTER } from "@/store/actions";
import { createRedux, createRequest } from "@/utils/redux-toolkit";

export const queryUserRegister = createRequest(
  QUERY_USER_REGISTER,
  "",
  "post",
  "GRAPHQL"
);
const userRegister = createRedux("userRegister", [queryUserRegister]);

export const clearUserRegister = userRegister.actions.clear;
export default userRegister.reducer;
