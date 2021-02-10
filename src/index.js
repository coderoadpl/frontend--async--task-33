import { signIn } from './auth'

console.log('Hello CodeRoad!')

signIn('example@example.com', 'fake-password')
    .then((data) => console.log('wrong credentials resolved', data))
    .catch((error) => console.error('wrong credentials rejected', error))

signIn('kontakt@coderoad.pl', 'secret')
.then((data) => console.log('good credentials resolved', data))
.catch((error) => console.error('good credentials rejected', error))