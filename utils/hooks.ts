import { clearAuthLogin, queryAuthLogin } from "@/store/reducer/auth/authLogin.reducer";
import { clearUserInfo, queryUserInfor } from "@/store/reducer/users/user.reducer";
import { createHookRedux } from ".";

const useAuthLogin = createHookRedux('authLoginReducer', {
    post: queryAuthLogin
}, clearAuthLogin);

const useUserInfo = createHookRedux('userInfo', {
    post: queryUserInfor
}, clearUserInfo);


export {
    useAuthLogin,
    useUserInfo
}