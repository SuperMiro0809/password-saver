import './ForgotPassword.scss';
import { useState, useContext } from 'react';
import { Form, FormGroup, FormControl, FormLabel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import MessageContext from '../../../contexts/MessageContext';
import services from '../../../services';

function ForgotPassword({
    history
}) {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const messageContext = useContext(MessageContext);

    function submitFormHandler(e) {
        e.preventDefault();

        services.userService.changePassword(email, password)
        .then(data => {
            messageContext[1]({ status: 'success', text: data.message});
            const interval = setTimeout(function () {
                messageContext[1]('');
                history.push('/login');
                clearInterval(interval);
            }, 2000);
        })
        .catch(err => {
            messageContext[1]({ status: 'error', text: err.message});
            const interval = setInterval(function () {
                messageContext[1]('');
                clearInterval(interval);
            }, 2000)
        })
    }

    return (
        <div className="Forgot-password">
             <h2>Forgot Password</h2>
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
                    <FormLabel>New password</FormLabel>
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
                        className="forgot-btn"
                        value="Reset password"
                    />
                    <div className="options">
                        <Link to="/login" >Back to Login</Link>
                    </div>
                </FormGroup>
            </Form>
        </div>
    );
}

export default ForgotPassword;