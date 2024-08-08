import authLoginReducer from "./reducer/auth/authLogin.reducer";
import userInfo from "./reducer/users/user.reducer";

const rootReducer = {
    authLoginReducer,
    userInfo
}

export default rootReducer;