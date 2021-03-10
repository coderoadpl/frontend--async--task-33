export class Auth {

    constructor(props) {
        const {
            componentNotLoggedIn: ComponentNotLoggedIn,
            componentLoggedIn: ComponentLoggedIn,
        } = props

        this.ComponentNotLoggedIn = ComponentNotLoggedIn
        this.ComponentLoggedIn = ComponentLoggedIn

        this.isLoggedIn = false
    }

    render() {
        const container = document.createElement('div')

        if (this.isLoggedIn) {
            const elementLoggedIn = new this.ComponentLoggedIn()
            container.appendChild(elementLoggedIn.render())
        } else {
            const elementNotLoggedIn = new this.ComponentNotLoggedIn()
            container.appendChild(elementNotLoggedIn.render())
        }

        return container
    }

}

export default Auth
