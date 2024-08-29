const queryGetOTP = `
mutation GetOtpResetPassword( $dataInput: GetOTPInput!){
  getOtpResetPassword(user: $dataInput){
				message
    }
}
`;

export {
    queryGetOTP
}