import { Button } from './components'

import {
    signIn,
    signUp,
    getIdToken,
    decodeToken,
    getUserData,
    updateUser,
    sendPasswordResetEmail,
    deleteUser,
    makeAuthorizedRequest,
    checkIfUserIsLoggedIn,
    logOut
} from './auth'

let isLoggedIn = false

const setIsLoggedIn = (newIsLoggedIn) => {
    isLoggedIn = newIsLoggedIn
    render()
}

checkIfUserIsLoggedIn()
    .then(setIsLoggedIn)

const render = () => {
    document.body.innerHTML = ''

    const button1 = new Button('Login (wrong credentials)', () => {
        signIn('example@example.com', 'fake-password')
            .then((data) => console.log('wrong credentials resolved', data))
            .catch((error) => console.error('wrong credentials rejected', error))
    })

    const button2 = new Button('Login (good credentials)', () => {
        signIn('kontakt@coderoad.pl', 'secret')
            .then((data) => {
                console.log('good credentials resolved', data)
                setIsLoggedIn(true)
            })
            .catch((error) => console.error('good credentials rejected', error))
    })

    const button3 = new Button('Sign up', () => {
        signUp('kontakt@coderoad.pl', 'secret')
            .then((data) => {
                console.log('sign up resolved', data)
                setIsLoggedIn(true)
            })
            .catch((error) => console.error('sign up rejected', error))
    })

    const button4 = new Button('Get token', () => {
        console.log(getIdToken())
    })

    const button5 = new Button('Decode token', () => {
        const token = getIdToken()
        console.log(decodeToken(token))
    })

    const button6 = new Button('Get user data', () => {
        getUserData()
            .then((user) => console.log('Get user data', user))
            .catch((error) => console.error('Get user data', error))
    })

    const button7 = new Button('Update user data', () => {
        updateUser()
            .then((user) => console.log('Update user data', user))
            .catch((error) => console.error('Update user data', error))
    })

    const button8 = new Button('Send password reset email', () => {
        sendPasswordResetEmail('kontakt@coderoad.pl')
            .then((user) => console.log('Send password reset email', user))
            .catch((error) => console.error('Send password reset email', error))
    })

    const button9 = new Button('Delete user', () => {
        deleteUser()
            .then((data) => {
                console.log('Delete user', data)
                setIsLoggedIn(false)
            })
            .catch((error) => console.error('Delete user', error))
    })

    const button10 = new Button('Make authorized request', () => {
        makeAuthorizedRequest('https://coderoad--sandbox-default-rtdb.firebaseio.com/.json')
            .then((data) => console.log('Make authorized request', data))
            .catch((error) => console.error('Make authorized request', error))
    })

    const button11 = new Button('Make authorized request with query params', () => {
        makeAuthorizedRequest('https://coderoad--sandbox-default-rtdb.firebaseio.com/dinosaurs/.json?orderBy="$key"&startAt="a"&endAt="m"')
            .then((data) => console.log('Make authorized request with query params', data))
            .catch((error) => console.error('Make authorized request with query params', error))
    })

    document.body.appendChild(button1.render())
    document.body.appendChild(button2.render())
    document.body.appendChild(button3.render())
    document.body.appendChild(button4.render())
    document.body.appendChild(button5.render())
    document.body.appendChild(button6.render())
    document.body.appendChild(button7.render())
    document.body.appendChild(button8.render())
    document.body.appendChild(button9.render())
    document.body.appendChild(button10.render())
    document.body.appendChild(button11.render())

    if (isLoggedIn) {
        const logOutButton = new Button('Log out', () => {
            logOut()
                .then((data) => {
                    console.log('Log out', data)
                    setIsLoggedIn(false)
                })
                .catch((error) => console.error('Log out', error))
        })

        document.body.appendChild(logOutButton.render())
    }

}

render()