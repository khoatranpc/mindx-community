import { Page } from "./enum";
import { Action } from "./interface";

const Folder = {
    APP: 'app',
    COMPONENTS: 'components',
    SCREENS: 'screens',
    LAYTOUTS: 'layouts'
}

export const initStateRedux: Action = {
    isLoading: false,
    success: false,
    data: null,
}

export {
    Folder
}