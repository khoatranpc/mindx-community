import { createRedux, createRequest } from "@/utils/redux-toolkit";
import { QUERY_MAIL_TEMPLATE } from "../actions";

export const queryMailTemplate = createRequest(QUERY_MAIL_TEMPLATE, '', 'post', 'GRAPHQL');
const mailTemplate = createRedux('mailTemplate', [queryMailTemplate]);

export const clearMailTemplate = mailTemplate.actions.clear;
export default mailTemplate.reducer;