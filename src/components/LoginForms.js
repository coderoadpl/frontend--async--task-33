import LoginForm from './LoginForm'
import RegistrationForm from './RegistrationForm'

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
        
        const registrationFormElement = new RegistrationForm({
            setLoggedIn: this.setLoggedIn,
        })
      
        this.container.appendChild(loginFormElement.render())
        this.container.appendChild(registrationFormElement.render())

        return this.container
    }

}

export default LoginForms
