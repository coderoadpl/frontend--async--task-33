import { makeRequest } from './makeRequest'

const PASSWORD_RESET_EMAIL_URL = 'https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyBLgVFUKq8psWokJWXVKR6Q-LhISj308q4'

export const sendPasswordResetEmail = (email) => {
    return makeRequest(
        PASSWORD_RESET_EMAIL_URL,
        {
            method: 'POST',
            body: JSON.stringify({
                requestType: 'PASSWORD_RESET',
                email,
            })
        }
    )
}

export default sendPasswordResetEmail
