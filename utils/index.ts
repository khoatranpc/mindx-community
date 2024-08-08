import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store";
import { Action, Obj, Query } from "@/global/interface";
import { v4 as randomUuid } from 'uuid';

interface MethodQuery extends Obj {
    get?: (action: Query) => void;
    post?: (action: Query) => void;
    put?: (action: Query) => void;
    delete?: (action: Query) => void;
}
const createHookRedux = (key: keyof RootState, queryMethodFnc?: MethodQuery): () => {
    state: Action,
    get?: (action: Query) => void;
    post?: (action: Query) => void;
    put?: (action: Query) => void;
    delete?: (action: Query) => void;
} => {
    return () => {
        const state = useSelector((state: RootState) => state[key]);
        const dispatch = useDispatch<AppDispatch>();
        const getQuery: Record<string, Function> = {};
        if (queryMethodFnc) {
            for (const key in queryMethodFnc) {
                getQuery[key] = (action: Query) => {
                    dispatch(queryMethodFnc[key](action));
                };
            }
        }
        return {
            state,
            ...getQuery
        }
    }
}
const uuid = () => {
    return randomUuid();
}
export {
    createHookRedux,
    uuid
}