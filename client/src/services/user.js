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
    .then(res => {
        if(res.status === 200) {
            return res.json();
        }else if(res.status === 409) {
            throw new Error('This email is already registered!');
        }
    })
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
    .then(res => {
        if(res.status === 200) {
            return res.json();
        }else if(res.status === 401) {
            throw new Error('Wrong email or password');
        }
    });
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

function profile() {
    return fetch(`${services.url}/user/profile`, {
        method: 'GET',
        credentials: 'include',
        headers: {
            'Access-Control-Allow-Origin': 'http://localhost:3000',
            'Content-Type': 'application/json',
        }
    })
    .then(res => res.json())
}

function changePassword(email, password) {
    let data = {
        email: email,
        password: password
    }

    return fetch(`${services.url}/user/reset/password`, {
        method: 'PUT',
        credentials: 'include',
        headers: {
            'Access-Control-Allow-Origin': 'http://localhost:3000',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    })
    .then(res => {
        if(res.status === 200) {
            return res.json();
        }else if(res.status === 401) {
            throw new Error('Email not registered!');
        }
    })
}

function changeEmail(email) {
    let data = {
        email: email
    }

    return fetch(`${services.url}/user/reset/email`, {
        method: 'PUT',
        credentials: 'include',
        headers: {
            'Access-Control-Allow-Origin': 'http://localhost:3000',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    })
    .then(res => {
        if(res.status === 200) {
            return res.json();
        }else if(res.status === 409) {
            throw new Error('This email is already registered!');
        }
    })
}

const service = {
    register,
    login,
    logout,
    profile,
    changePassword,
    changeEmail
}

export default service;