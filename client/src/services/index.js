import userService from './user';
import passwordService from './password';
const url = 'http://localhost:9000/api';

const header = {
    'Access-Control-Allow-Origin': 'http://localhost:3000',
    'Content-Type': 'application/json',
}

const services = {
    url,
    header,
    userService,
    passwordService
}

export default services;