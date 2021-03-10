export class Auth {

    constructor(props) {
        const {
            componentNotLoggedIn: ComponentNotLoggedIn,
            componentLoggedIn: ComponentLoggedIn,
        } = props

        this.ComponentNotLoggedIn = ComponentNotLoggedIn
        this.ComponentLoggedIn = ComponentLoggedIn
    }

    render() {
        const container = document.createElement('div')

        const elementNotLoggedIn = new this.ComponentNotLoggedIn()
        const elementLoggedIn = new this.ComponentLoggedIn()

        container.appendChild(elementNotLoggedIn.render())
        container.appendChild(elementLoggedIn.render())

        return container
    }

}

export default Auth
