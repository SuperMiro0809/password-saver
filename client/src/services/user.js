import services from './index';

function register(email, password, repeatPassword) {
    let data = {
        email: email,
        password: password,
        repeatPassword: repeatPassword
    }

    return fetch(`${services.url}/user/register`, {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Access-Control-Allow-Origin': 'http://localhost:3000',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    })
    .then(res => res.json())
}

function login(email, password) {
    let data = {
        email: email,
        password: password
    }

    return fetch(`${services.url}/user/login`, {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Access-Control-Allow-Origin': 'http://localhost:3000',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    })
    .then(res => res.json());
}

function logout() {
    return fetch(`${services.url}/user/logout`, {
        method: 'GET',
        credentials: 'include',
        headers: {
            'Access-Control-Allow-Origin': 'http://localhost:3000',
            'Content-Type': 'application/json',
        }
    })
    .then(res => res.json())
}

const service = {
    register,
    login,
    logout
}

export default service;