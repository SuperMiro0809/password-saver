import './Register.scss';
import { Form, FormGroup, FormControl, FormLabel, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Register() {
    return (
        <div className="Register">
             <h2>Register</h2>
            <Form>
                <FormGroup>
                    <FormLabel>Email</FormLabel>
                    <FormControl type="email" className="form-control" />
                </FormGroup>
                <FormGroup>
                    <FormLabel>Password</FormLabel>
                    <FormControl type="password" className="form-control" />
                </FormGroup>
                <FormGroup>
                    <FormLabel>Repeat password</FormLabel>
                    <FormControl type="password" className="form-control" />
                </FormGroup>
                <FormGroup className="btn-wrapper">
                    <Button className="register-btn">Register</Button>
                    <Link to="/login" >Have an account?</Link>
                </FormGroup>
            </Form>
        </div>
    );
}

export default Register;