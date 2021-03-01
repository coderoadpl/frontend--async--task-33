import { makeRequest } from './makeRequest'
import { getToken } from './token'

const DELETE_USER_URL = 'https://identitytoolkit.googleapis.com/v1/accounts:delete?key=AIzaSyBLgVFUKq8psWokJWXVKR6Q-LhISj308q4'

export const deleteUser = () => {
    const token = getToken()

    if (!token) return Promise.reject('No token found')

    return makeRequest(
        DELETE_USER_URL,
        {
            method: 'POST',
            body: JSON.stringify({
                idToken: token
            })
        }
    )
}

export default deleteUser
