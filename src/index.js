import { Button } from './components'

import { signIn } from './auth'

const button1 = new Button('Login (wrong credentials)', () => {
    signIn('example@example.com', 'fake-password')
    .then((data) => console.log('wrong credentials resolved', data))
    .catch((error) => console.error('wrong credentials rejected', error))
})

const button2 = new Button('Login (good credentials)', () => {
    signIn('kontakt@coderoad.pl', 'secret')
        .then((data) => console.log('good credentials resolved', data))
        .catch((error) => console.error('good credentials rejected', error))
})

document.body.appendChild(button1.render())
document.body.appendChild(button2.render())