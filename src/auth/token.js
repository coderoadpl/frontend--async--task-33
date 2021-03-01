const ID_TOKEN_KEY = 'coderoad-idToken'

export const getIdToken = () => {
    return localStorage.getItem(ID_TOKEN_KEY)
}

export const setIdToken = (newToken) => {
    localStorage.setItem(ID_TOKEN_KEY, newToken)
}
