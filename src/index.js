import Auth from './auth'

import LoginForms from './components/LoginForms' 
import Loader from './components/Loader' 

import App from './App'

const authElement = new Auth({
    componentNotLoggedIn: LoginForms,
    componentLoggedIn: App,
    componentLoader: Loader,
})

document.body.appendChild(authElement.render())