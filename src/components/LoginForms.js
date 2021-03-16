import { signIn } from '../auth'

import Button from './Button'

export class LoginForms {

    constructor(props) {
        const {
            checkIfUserIsLoggedInThenChangeLoggedInState
        } = props

        this.checkIfUserIsLoggedInThenChangeLoggedInState = checkIfUserIsLoggedInThenChangeLoggedInState
     }

    render() {
        const container = document.createElement('div')

        const buttonElement = new Button('Log in', () => {
            return signIn('kontakt@coderoad.pl', 'secret')
                .then(() => {
                    return  this.checkIfUserIsLoggedInThenChangeLoggedInState()
                })
        })

        container.appendChild(buttonElement.render())

        return container
    }

}

export default LoginForms
