import services from './index';

function getPasswords(id) {
    return fetch(`${services.url}/password/${id}`, {
        method: 'GET',
        credentials: 'include',
        headers: services.header,
    })
    .then(res => res.json())
}

function getPasswordById(passwordId) {
    return fetch(`${services.url}/password/password/${passwordId}`, {
        method: 'GET',
        credentials: 'include',
        headers: services.header,
    })
    .then(res => res.json())
}

function filterPasswords(id, name) {
    return fetch(`${services.url}/password/${id}?name=${name}`, {
        method: 'GET',
        credentials: 'include',
        headers: services.header,
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
        headers: services.header,
        body: JSON.stringify(data)
    })
    .then(res => res.json())
}

function deletePassword(passwordId) {
    return fetch(`${services.url}/password/${passwordId}`, {
        method: 'DELETE',
        credentials: 'include',
        headers: services.header
    })
    .then(res => res.json())
}

function editPassword(passwordId, name, auth, password) {
    let data = {
        name: name,
        auth: auth,
        password: password
    }

    return fetch(`${services.url}/password/${passwordId}`, {
        method: 'PUT',
        credentials: 'include',
        headers: services.header,
        body: JSON.stringify(data)
    })
    .then(res => res.json())
}

const service = {
    getPasswords,
    getPasswordById,
    filterPasswords,
    AddPassword,
    deletePassword,
    editPassword
}

export default service;