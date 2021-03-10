export class Auth {

    constructor(props) {
        const {
            componentNotLoggedIn,
            componentLoggedIn,
        } = props

        this.componentNotLoggedIn = componentNotLoggedIn
        this.componentLoggedIn = componentLoggedIn
    }

    render() {
        const container = document.createElement('div')

        const elementNotLoggedIn = new this.componentNotLoggedIn()
        const elementLoggedIn = new this.componentLoggedIn()

        container.appendChild(elementNotLoggedIn.render())
        container.appendChild(elementLoggedIn.render())

        return container
    }

}

export default Auth
