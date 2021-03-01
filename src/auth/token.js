const ID_TOKEN_KEY = 'coderoad-idToken'

export const getToken = () => {
    return localStorage.getItem(ID_TOKEN_KEY)
}

export const setToken = (newToken) => {
    localStorage.setItem(ID_TOKEN_KEY, newToken)
}
