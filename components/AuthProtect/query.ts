const queryUserInfo = `
mutation GetUser($currentUserIdInput: CurrentUserIdInput!){
    getUser(currentUserIdInput: $currentUserIdInput){
        email,
        userName,
        _id,
        phoneNumber,
        role,
        address,
        image,
        active,
        identityFrontImage,
        identityBackImage
    }
}`

export {
    queryUserInfo
}