import { useDispatch, useSelector } from "react-redux";
import { v4 as randomUuid } from 'uuid';
import { Action, Obj, Query } from "@/global/interface";
import { AppDispatch, RootState } from "@/store";

type QueryMethod = (action: Query) => void;
interface MethodQuery extends Obj {
    get?: QueryMethod;
    post?: QueryMethod;
    put?: QueryMethod;
    delete?: QueryMethod;
}
const createHookRedux = (key: keyof RootState, queryMethodFnc?: MethodQuery, clear?: Function): () => ({
    state: Action;
    get?: QueryMethod;
    post?: QueryMethod;
    put?: QueryMethod;
    delete?: QueryMethod;
    clear?: Function;
}) => {
    return () => {
        const state = useSelector((state: RootState) => state[key]);
        const dispatch = useDispatch<AppDispatch>();
        const getQuery: MethodQuery = {};
        if (queryMethodFnc) {
            for (const key in queryMethodFnc) {
                getQuery[key] = (action: Query) => {
                    dispatch(queryMethodFnc[key](action));
                };
            }
        }
        const clearFnc = () => {
            dispatch(clear?.());
        }
        return {
            state,
            ...getQuery,
            clear: clearFnc
        }
    }
}
export type HookRedux = ReturnType<ReturnType<typeof createHookRedux>>
const uuid = () => {
    return randomUuid();
}
export {
    createHookRedux,
    uuid
}