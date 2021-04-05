import './Register.scss';
import { Form, FormGroup, FormControl, FormLabel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Register() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [repeatPassword, setRepeatPassword] = useState();

    function submitFormHandler(event) {
        event.preventDefault();
        console.log(email, password, repeatPassword);
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