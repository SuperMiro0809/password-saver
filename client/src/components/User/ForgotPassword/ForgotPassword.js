import './ForgotPassword.scss';
import { Form, FormGroup, FormControl, FormLabel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import services from '../../../services';

function ForgotPassword({
    history
}) {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [error, setError] = useState();

    function submitFormHandler(e) {
        e.preventDefault();

        services.userService.changePassword(email, password)
        .then(data => {
            history.push('/login');
        })
        .catch(err => {
            setError(err.message)
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