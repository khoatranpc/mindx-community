import { Action, Obj } from "@/global/interface";
import { AsyncThunk, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { initStateRedux } from "@/global";
import actionRequest from "./axios";

const createRequest = (type: string, endpoint: string, method: 'get' | 'post' | 'put' | 'delete', standardQuery: 'REST' | 'GRAPHQL'): any => {
    return createAsyncThunk(type, async (action: Action | any) => {
        const rs = await actionRequest(standardQuery, method, endpoint, action);
        return rs.data;
    });
}
const createRedux = (nameState: string, asyncThunk?: (AsyncThunk<any, Action | undefined, any> | undefined)[]) => {
    return createSlice({
        name: nameState,
        initialState: initStateRedux,
        reducers: {
            clear(state) {
                state.data = null;
                state.success = false;
                state.isLoading = false;
            }
        },
        extraReducers(builder) {
            asyncThunk?.forEach(item => {
                builder.addCase(item!.pending, (state, action) => {
                    const args = action.meta.arg;
                    state.isLoading = true;
                    state.componentId = args?.componentId;
                });
                builder.addCase(item!.fulfilled, (state, action) => {
                    const args = action.meta.arg;
                    const getData = action.payload as Obj;
                    state.isLoading = false;
                    state.componentId = args?.componentId;
                    state.statusCode = 200;
                    if (getData.data) state.data = getData.data as Obj;
                    state.message = 'Thành công!';
                    state.error = null;
                    if (getData.errors) {
                        state.data = null;
                        state.success = false;
                        state.error = (getData.errors as Obj[]);
                        state.message = (getData.errors as Obj[])?.[0]?.message as string;
                        state.statusCode = (getData.errors as Obj[])?.[0]?.statusCode as number;
                    }
                });
                builder.addCase(item!.rejected, (state, action) => {
                    const args = action.meta.arg;
                    const getData = action.payload as Obj;
                    state.data = getData.data as Obj;
                    state.isLoading = false;
                    state.success = false;
                    state.componentId = args?.componentId;
                    state.statusCode = 500;
                    if (getData.errors) {
                        state.data = null;
                        state.success = false;
                        state.error = (getData.errors as Obj[]);
                        state.message = (getData.errors as Obj[])?.[0]?.message as string;
                        state.statusCode = (getData.errors as Obj[])?.[0]?.statusCode as number;
                    }
                });
            });
        },
    })
}

export {
    createRequest,
    createRedux
}