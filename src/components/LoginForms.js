import { signIn } from '../auth'

import Button from './Button'

export class LoginForms {

    constructor(props) {
        const {
            setLoggedIn
        } = props

        this.setLoggedIn = setLoggedIn
     }

    render() {
        const container = document.createElement('div')

        const buttonElement = new Button('Log in', () => {
            return signIn('kontakt@coderoad.pl', 'secret')
                .then(() => {
                    return  this.setLoggedIn(true)
                })
        })

        container.appendChild(buttonElement.render())

        return container
    }

}

export default LoginForms
