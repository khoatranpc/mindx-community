const queryLogin = `
mutation Authenticated($userAuthenticateInput: UserAuthenticateInput!) {
    authenticated(userAuthenticateInput: $userAuthenticateInput) {
      access_token
    }
  }
`

export {
    queryLogin
}