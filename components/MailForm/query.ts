const queryGetOneMailTemplate = (id: string) => {
    return `
        query GetOneMail {
            getOneMail(conditional: { id: "${id}" }) {
                _id
                title
                html
                isDelete
            }
        }

    `
};

export {
    queryGetOneMailTemplate
};