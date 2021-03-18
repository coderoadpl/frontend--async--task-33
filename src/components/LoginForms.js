import { signIn } from '../auth'

import Button from './Button'
import Input from './Input'

export class LoginForms {

    constructor(props) {
        const {
            setLoggedIn
        } = props

        this.container = null

        this.setLoggedIn = setLoggedIn

        this.email = ''
        this.password = ''
    }

    setEmail(newEmail) {
        this.email = newEmail
        this.render()
    }

    setPassword(newPassword) {
        this.password = newPassword
        this.render()
    }

    render() {
        if (!this.container) {
            this.container = document.createElement('div')
        }

        this.container.innerHTML = ''

        const emailInputElement = new Input({
            text: this.email,
            onChange: this.setEmail.bind(this),
            placeholder: 'E-mail'
        })
        const passwordInputElement = new Input({
            text: this.password,
            onChange: this.setPassword.bind(this),
            placeholder: 'Password',
            type: 'password'
        })

        const buttonElement = new Button('Log in', () => {
            return signIn('kontakt@coderoad.pl', 'secret')
                .then(() => {
                    return this.setLoggedIn(true)
                })
        })

        this.container.appendChild(emailInputElement.render())
        this.container.appendChild(passwordInputElement.render())
        this.container.appendChild(buttonElement.render())

        return this.container
    }

}

export default LoginForms
