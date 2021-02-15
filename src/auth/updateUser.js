import { makeRequest } from './makeRequest'
import { getToken } from './token'

const UPDATE_USER_URL = 'https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyBLgVFUKq8psWokJWXVKR6Q-LhISj308q4'

export const updateUser = (displayName, photoUrl) => {
    const token = getToken()

    if (!token) return Promise.reject('No token found')

    const deleteAttribute = (
        displayName && photoUrl ?
            undefined
            :
            [
                ...(!displayName ? ['DISPLAY_NAME'] : []),
                ...(!photoUrl ? ['PHOTO_URL'] : []),
            ]
    )

    return makeRequest(
        UPDATE_USER_URL,
        {
            method: 'POST',
            body: JSON.stringify({
                idToken: token,
                ...(!displayName ? {} : { displayName }),
                ...(!photoUrl ? {} : { photoUrl }),
                deleteAttribute,
                returnSecureToken: true,
            })
        }
    )
}

export default updateUser
