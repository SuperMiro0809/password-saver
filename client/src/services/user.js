import services from './index';

function register(email, password, repeatPassword) {
    let data = {
        email: email,
        password: password,
        repeatPassword: repeatPassword
    }

    return fetch(`${services.url}/user/register`, {
        method: 'POST',
        headers: {
            'Access-Control-Allow-Origin': 'http://localhost:3000',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    })
}
const service = {
    register
}

export default service;