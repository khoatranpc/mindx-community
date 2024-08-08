import { queryAuthLogin } from "@/store/reducer/auth/authLogin.reducer";
import { createHookRedux } from ".";

const useAuthLogin = createHookRedux('authLoginReducer', {
    post: queryAuthLogin
});

export {
    useAuthLogin
}