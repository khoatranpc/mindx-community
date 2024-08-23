import { clearAuthLogin, queryAuthLogin } from "@/store/reducer/auth/authLogin.reducer";
import { clearUserInfo, queryUserInfor } from "@/store/reducer/users/user.reducer";
import { createHookRedux } from ".";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store";
import { changeTheme } from "@/store/reducer/theme/theme.reducer";
import { Query } from "@/global/interface";
import { Theme } from "@/global/enum";
import { clearMailTemplate, queryMailTemplate } from "@/store/reducer/mailTemplate.reducer";
import { clearGetOTPRSP, queryGetOTPRSP } from "@/store/reducer/auth/getOtpResetPassword.reducer";

const useAuthLogin = createHookRedux('authLoginReducer', {
    post: queryAuthLogin
}, clearAuthLogin);

const useUserInfo = createHookRedux('userInfo', {
    post: queryUserInfor
}, clearUserInfo);

const useTheme = () => {
    const theme = useSelector((state: RootState) => state.theme);
    const dispatch = useDispatch<AppDispatch>();
    const change = (theme: Theme) => {
        dispatch(changeTheme(theme));
    }
    return {
        data: theme.data,
        change
    }
}

const useMailTemplate = createHookRedux('mailTemplate', {
    post: queryMailTemplate
}, clearMailTemplate);


const useGetOTPRSP = createHookRedux('getOtpResetPassword', {
    post: queryGetOTPRSP
}, clearGetOTPRSP);

export {
    useAuthLogin,
    useUserInfo,
    useTheme,
    useMailTemplate,
    useGetOTPRSP
}
