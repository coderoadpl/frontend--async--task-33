import { makeRequest } from './makeRequest'
import { setIdToken } from './token'

const SIGN_IN_URL = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBLgVFUKq8psWokJWXVKR6Q-LhISj308q4'

export const signIn = (email, password) => {
    return makeRequest(
        SIGN_IN_URL,
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

        return data
    }))
}

export default signIn
