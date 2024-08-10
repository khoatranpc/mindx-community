import { createAction } from "@reduxjs/toolkit";
import { Theme } from "@/global/enum";
import { createRedux } from "@/utils/redux-toolkit";

const theme = createRedux('theme', undefined, {
    data: {
        mode: Theme.LIGHT
    },
    success: true
}, {
    changeTheme(state, action) {
        state.data.mode = action!.payload;
    }
});

export const changeTheme = createAction<Theme, string>(`${theme.name}/changeTheme`);
export default theme.reducer;