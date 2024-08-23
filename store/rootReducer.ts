import authLoginReducer from "./reducer/auth/authLogin.reducer";
import userInfo from "./reducer/users/user.reducer";
import theme from "./reducer/theme/theme.reducer";
import mailTemplate from "./reducer/mailTemplate.reducer";
import getOtpResetPassword from './reducer/auth/getOtpResetPassword.reducer';

const rootReducer = {
    authLoginReducer,
    userInfo,
    theme,
    mailTemplate,
    getOtpResetPassword
}

export default rootReducer;