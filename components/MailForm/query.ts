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

const querySaveMailTemplate = `
mutation FindMailTemplateByIdAndUpdate($dataInput: FindMailTemplateByIdAndUpdate!){
    findMailTemplateByIdAndUpdate(updateMailTemplate: $dataInput) {
        _id
    }
}

`

export {
    queryGetOneMailTemplate,
    querySaveMailTemplate
};