import userService from './user';
import passwordService from './password';
const url = 'http://localhost:9000/api';

const services = {
    url,
    userService,
    passwordService
}

export default services;