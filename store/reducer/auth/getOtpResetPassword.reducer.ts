import { QUERY_GET_OTP_RESET_PASSWORD } from "@/store/actions";
import { createRedux, createRequest } from "@/utils/redux-toolkit";
import { createAction } from "@reduxjs/toolkit";

export const queryGetOTPRSP = createRequest(QUERY_GET_OTP_RESET_PASSWORD, '', 'post', 'GRAPHQL');
const getOtpResetPassword = createRedux('getOtpResetPassword', [queryGetOTPRSP]);

export const clearGetOTPRSP = createAction<void,string>(`${getOtpResetPassword.name}/clear`);
export default getOtpResetPassword.reducer;