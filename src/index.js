import Auth from './auth'

import LoginForms from './components/LoginForms' 

import App from './App'

const authElement = new Auth({
    componentNotLoggedIn: LoginForms,
    componentLoggedIn: App,
})

document.body.appendChild(authElement.render())