import './Register.scss';
import { useState, useContext, useEffect } from 'react';
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
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [repeatPasswordError, setRepeatPasswordError] = useState('');
    const userContext = useContext(AuthContext);
    const messageContext = useContext(MessageContext);

    function submitFormHandler(event) {
        event.preventDefault();

        services.userService.register(email, password, repeatPassword)
        .then(data => {
            localStorage.setItem("user-id", data._id);
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

    useEffect(() => {
        if(email && !/^[\w-\.]+@[\w-\.]+\.[\w-]{2,4}$/.test(email)) {
            setEmailError('Email is not valid');
        }else if(email && /^[\w-\.]+@[\w-\.]+\.[\w-]{2,4}$/.test(email)) {
            setEmailError('');
        }
    
        if(password && password.length < 6) {
            setPasswordError('Password should be at least 6 characters long');
        }else if(password && password.length >= 6) {
            setPasswordError('');
        }
    
        if(repeatPassword && password && repeatPassword !== password) {
            setRepeatPasswordError('Passwords don\'t match');
        }else if(repeatPassword && password && repeatPassword === password) {
            setRepeatPasswordError('');
        }

    }, [ email, password, repeatPassword ])

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
                {emailError && <span className="error">{emailError}</span>}
                <FormGroup>
                    <FormLabel>Password</FormLabel>
                    <FormControl 
                        type="password" 
                        name="password" 
                        className="form-control" 
                        onChange={e => setPassword(e.target.value)}
                    />
                </FormGroup>
                {passwordError && <span className="error">{passwordError}</span>}
                <FormGroup>
                    <FormLabel>Repeat password</FormLabel>
                    <FormControl 
                        type="password" 
                        name="repeatPassword" 
                        className="form-control" 
                        onChange={e => setRepeatPassword(e.target.value)}
                    />
                </FormGroup>
                {repeatPasswordError && <span className="error">{repeatPasswordError}</span>}
                <FormGroup className="btn-wrapper">
                    <FormControl 
                        type="submit"
                        value="Register"
                        className="register-btn"
                        disabled={emailError || passwordError || repeatPasswordError || !email || !password || !repeatPassword}
                    />
                    <Link to="/login" >Have an account?</Link>
                </FormGroup>
            </Form>
        </div>
    );
}

export default Register;