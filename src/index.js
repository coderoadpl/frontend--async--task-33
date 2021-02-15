import { Button } from './components'

import { signIn, signUp, getToken, decodeToken, getUserData } from './auth'

const button1 = new Button('Login (wrong credentials)', () => {
    signIn('example@example.com', 'fake-password')
        .then((data) => console.log('wrong credentials resolved', data))
        .catch((error) => console.error('wrong credentials rejected', error))
})

const button2 = new Button('Login (good credentials)', () => {
    signIn('kontakt@coderoad.pl', 'secret')
        .then((data) => console.log('good credentials resolved', data))
        .catch((error) => console.error('good credentials rejected', error))
})

const button3 = new Button('Sign up', () => {
    signUp('kontakt+2@coderoad.pl', 'secret')
        .then((data) => console.log('sign up resolved', data))
        .catch((error) => console.error('sign up rejected', error))
})

const button4 = new Button('Get token', () => {
    console.log(getToken())
})

const button5 = new Button('Decode token', () => {
   const token = getToken()
   console.log(decodeToken(token))
})

const button6 = new Button('Get user data', () => {
   getUserData()
    .then((user) => console.log('Get user data', user))
    .catch((user) => console.error('Get user data', user))
})

document.body.appendChild(button1.render())
document.body.appendChild(button2.render())
document.body.appendChild(button3.render())
document.body.appendChild(button4.render())
document.body.appendChild(button5.render())
document.body.appendChild(button6.render())