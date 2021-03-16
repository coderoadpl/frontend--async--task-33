import { logOut } from './auth'
import Button from './components/Button'

export class App {

    constructor(props) {
        const {
            checkIfUserIsLoggedInThenChangeLoggedInState
        } = props

        this.checkIfUserIsLoggedInThenChangeLoggedInState = checkIfUserIsLoggedInThenChangeLoggedInState
    }

    render() {
        const container = document.createElement('div')

        const buttonElement = new Button('Log out', () => {
            return logOut()
                .then(() => {
                    return this.checkIfUserIsLoggedInThenChangeLoggedInState()
                })
        })

        container.appendChild(buttonElement.render())

        return container
    }

}

export default App
