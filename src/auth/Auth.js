import { checkIfUserIsLoggedIn } from './checkIfUserIsLoggedIn'

export class Auth {

    constructor(props) {
        const {
            componentNotLoggedIn: ComponentNotLoggedIn,
            componentLoggedIn: ComponentLoggedIn,
        } = props

        this.ComponentNotLoggedIn = ComponentNotLoggedIn
        this.ComponentLoggedIn = ComponentLoggedIn

        this.container = null
        this.isLoggedIn = false

        this.init()
    }

    init() {
        checkIfUserIsLoggedIn()
            .then((isLoggedIn) => {
                this.isLoggedIn = isLoggedIn
                this.render()
            })
    }

    render() {
        if (!this.container) {
            this.container = document.createElement('div')
        }

        this.container.innerHTML = ''

        if (this.isLoggedIn) {
            const elementLoggedIn = new this.ComponentLoggedIn()
            this.container.appendChild(elementLoggedIn.render())
        } else {
            const elementNotLoggedIn = new this.ComponentNotLoggedIn()
            this.container.appendChild(elementNotLoggedIn.render())
        }

        return this.container
    }

}

export default Auth
