import { makeRequest } from './makeRequest'
import { setIdToken, setRefreshToken } from './token'

const SIGN_UP_URL = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBLgVFUKq8psWokJWXVKR6Q-LhISj308q4'

export const signUp = (email, password) => {
    return makeRequest(
        SIGN_UP_URL,
        {
            method: 'POST',
            body: JSON.stringify({
                email,
                password,
                returnSecureToken: true
            })
        }
    ).then((data => {
        setIdToken(data.idToken)
        setRefreshToken(data.refreshToken)

        return data
    }))
}

export default signUp
