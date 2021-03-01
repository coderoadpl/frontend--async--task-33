import { makeRequest } from './makeRequest'
import { getToken } from './token'

export const makeAuthorizedRequest = (url, options) => {
    const token = getToken()

    if (!token) return Promise.reject('No token found')

    const urlWithToken = `${url}?auth=${token}`

    return makeRequest(urlWithToken, options)
}

export default makeAuthorizedRequest
