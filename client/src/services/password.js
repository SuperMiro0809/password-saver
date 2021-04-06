import services from './index';

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
    AddPassword,
    deletePassword,
    editPassword
}

export default service;