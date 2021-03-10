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
        checkIfUserIsLoggedIn()
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

        if (!this.isLoggedIn) {
            const elementNotLoggedIn = new this.ComponentNotLoggedIn()
            this.container.appendChild(elementNotLoggedIn.render())
            return this.container
        }
        
        const elementLoggedIn = new this.ComponentLoggedIn()
        this.container.appendChild(elementLoggedIn.render())
        return this.container
    }

}

export default Auth
