const queryListMailTemplate = (fields: string[]) => {
    return `
query GetListMail {
    getListMail {
        _id
        ${fields.join(',')}
    }
}
`
}
export {
    queryListMailTemplate
}