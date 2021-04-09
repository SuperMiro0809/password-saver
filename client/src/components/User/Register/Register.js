import './Register.scss';
import { useState, useContext } from 'react';
import { Form, FormGroup, FormControl, FormLabel } from 'react-bootstrap';
import AuthContext from '../../../contexts/AuthContext';
import MessageContext from '../../../contexts/MessageContext';
import { Link } from 'react-router-dom';
import services from '../../../services';

function Register({
    history
}) {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [repeatPassword, setRepeatPassword] = useState();
    const userContext = useContext(AuthContext);
    const messageContext = useContext(MessageContext);

    function submitFormHandler(event) {
        event.preventDefault();

        services.userService.register(email, password, repeatPassword)
        .then(data => {
            userContext[1](data);
            history.push('/dashboard');
        })
        .catch(err => {
            messageContext[1]({ status: 'error', text: err.message});
            const interval = setInterval(function () {
                messageContext[1]('');
                clearInterval(interval);
            }, 2000);
        })
    }   

    return (
        <div className="Register">
             <h2>Register</h2>
            <Form onSubmit={e => submitFormHandler(e)}>
                <FormGroup>
                    <FormLabel>Email</FormLabel>
                    <FormControl 
                        type="email" 
                        name="email" 
                        className="form-control" 
                        onChange={e => setEmail(e.target.value)}
                    />
                </FormGroup>
                <FormGroup>
                    <FormLabel>Password</FormLabel>
                    <FormControl 
                        type="password" 
                        name="password" 
                        className="form-control" 
                        onChange={e => setPassword(e.target.value)}
                    />
                </FormGroup>
                <FormGroup>
                    <FormLabel>Repeat password</FormLabel>
                    <FormControl 
                        type="password" 
                        name="repeatPassword" 
                        className="form-control" 
                        onChange={e => setRepeatPassword(e.target.value)}
                    />
                </FormGroup>
                <FormGroup className="btn-wrapper">
                    <FormControl 
                        type="submit"
                        value="Register"
                        className="register-btn"
                    />
                    <Link to="/login" >Have an account?</Link>
                </FormGroup>
            </Form>
        </div>
    );
}

export default Register;