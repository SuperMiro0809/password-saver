import services from './index';

function getPasswords(id) {
    return fetch(`${services.url}/password/${id}`, {
        method: 'GET',
        credentials: 'include',
        headers: {
            'Access-Control-Allow-Origin': 'http://localhost:3000',
            'Content-Type': 'application/json',
        },
    })
    .then(res => res.json())
}

function filterPasswords(id, name) {
    return fetch(`${services.url}/password/${id}?name=${name}`, {
        method: 'GET',
        credentials: 'include',
        headers: {
            'Access-Control-Allow-Origin': 'http://localhost:3000',
            'Content-Type': 'application/json',
        },
    })
    .then(res => res.json())
}

function AddPassword(name, auth, password) {
    let data = {
        name: name,
        auth: auth,
        password: password
    }

    return fetch(`${services.url}/password`, {
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

function deletePassword(id) {

}

function editPassword(id) {

}

const service = {
    getPasswords,
    filterPasswords,
    AddPassword,
    deletePassword,
    editPassword
}

export default service;