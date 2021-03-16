import { checkIfUserIsLoggedIn } from './checkIfUserIsLoggedIn'

export class Auth {

    constructor(props) {
        const {
            componentNotLoggedIn: ComponentNotLoggedIn,
            componentLoggedIn: ComponentLoggedIn,
            componentLoader: ComponentLoader,
        } = props

        this.ComponentNotLoggedIn = ComponentNotLoggedIn
        this.ComponentLoggedIn = ComponentLoggedIn
        this.ComponentLoader = ComponentLoader

        this.container = null
        this.isLoggedIn = false
        this.isLoading = true

        this.init()
    }

    init() {
        this.checkIfUserIsLoggedInThenChangeLoggedInState()
    }

    checkIfUserIsLoggedInThenChangeLoggedInState() {
        return checkIfUserIsLoggedIn()
            .then((isLoggedIn) => {
                this.isLoggedIn = isLoggedIn
                this.render()
            })
            .finally(() => {
                this.isLoading = false
                this.render()
            })
    }

    render() {
        if (!this.container) {
            this.container = document.createElement('div')
        }

        this.container.innerHTML = ''

        if (this.isLoading) {
            const elementLoader = new this.ComponentLoader()
            this.container.appendChild(elementLoader.render())
            return this.container
        }

        const checkIfUserIsLoggedInThenChangeLoggedInState = this.checkIfUserIsLoggedInThenChangeLoggedInState.bind(this)

        if (!this.isLoggedIn) {
            const elementNotLoggedIn = new this.ComponentNotLoggedIn({
                checkIfUserIsLoggedInThenChangeLoggedInState
            })
            this.container.appendChild(elementNotLoggedIn.render())
            return this.container
        }

        const elementLoggedIn = new this.ComponentLoggedIn({
            checkIfUserIsLoggedInThenChangeLoggedInState
        })
        this.container.appendChild(elementLoggedIn.render())
        return this.container
    }

}

export default Auth
