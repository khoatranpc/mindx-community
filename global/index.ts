import { Action } from "./interface";

const Folder = {
    APP: 'app',
    COMPONENTS: 'components',
    SCREENS: 'screens'
}

export {
    Folder
}

export const initStateRedux: Action = {
    isLoading: false,
    success: false,
    data: null,
}