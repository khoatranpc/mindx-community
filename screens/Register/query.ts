const queryRegister = `
mutation RegisterUser($createUserInput: CreateUserInput!) {
  createUser(createUserInput: $createUserInput) {
    _id
    userName
    email
    phoneNumber
    role
    active
  }
}
`;
export {queryRegister}