import authLoginReducer from "./reducer/auth/authLogin.reducer";
import userInfo from "./reducer/users/user.reducer";
import theme from "./reducer/theme/theme.reducer";

const rootReducer = {
    authLoginReducer,
    userInfo,
    theme
}

export default rootReducer;