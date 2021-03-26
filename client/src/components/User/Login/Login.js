import './Login.scss';
import { Form, FormGroup, FormControl, FormLabel, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Login() {
    return (
        <div className="Login">
             <h2>Login</h2>
            <Form>
                <FormGroup>
                    <FormLabel>Email</FormLabel>
                    <FormControl type="email" className="form-control" />
                </FormGroup>
                <FormGroup>
                    <FormLabel>Password</FormLabel>
                    <FormControl type="password" className="form-control" />
                </FormGroup>
                <FormGroup className="btn-wrapper">
                    <Button className="login-btn">Login</Button>
                    <div className="options">
                        <Link to="/register" >Don't have an account?</Link>
                        <Link to="/register" >Forgot password?</Link>
                    </div>
                </FormGroup>
            </Form>
        </div>
    );
}

export default Login;