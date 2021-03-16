import { logOut } from './auth'
import Button from './components/Button'

export class App {

    constructor(props) {
        const {
            setLoggedIn
        } = props

        this.setLoggedIn = setLoggedIn
    }

    render() {
        const container = document.createElement('div')

        const buttonElement = new Button('Log out', () => {
            return logOut()
                .then(() => {
                    return this.setLoggedIn(false)
                })
        })

        container.appendChild(buttonElement.render())

        return container
    }

}

export default App
