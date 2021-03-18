import LoginForm from './LoginForm'

export class LoginForms {

    constructor(props) {
        const {
            setLoggedIn,
        } = props

        this.container = null

        this.setLoggedIn = setLoggedIn
    }

    render() {
        if (!this.container) {
            this.container = document.createElement('div')
        }

        this.container.innerHTML = ''

        const loginFormElement = new LoginForm({
            setLoggedIn: this.setLoggedIn,
        })
      
        this.container.appendChild(loginFormElement.render())

        return this.container
    }

}

export default LoginForms
