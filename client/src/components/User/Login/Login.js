import './Login.scss';
import { Form, FormGroup, FormControl, FormLabel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useState, useContext } from 'react';
import MessageContext from '../../../contexts/MessageContext';
import AuthContext from '../../../contexts/AuthContext';
import services from '../../../services';

function Login({
    history
}) {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    let userContext = useContext(AuthContext);
    const messageContext = useContext(MessageContext);

    function submitFormHandler(event) {
        event.preventDefault();

        services.userService.login(email, password)
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
        <div className="Login">
             <h2>Login</h2>
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
                <FormGroup className="btn-wrapper">
                    <FormControl 
                        type="submit"
                        className="login-btn"
                        value="Login"
                    />
                    <div className="options">
                        <Link to="/register" >Don't have an account?</Link>
                        <Link to="/forgot-password" >Forgot password?</Link>
                    </div>
                </FormGroup>
            </Form>
        </div>
    );
}

export default Login;