import './PasswordForm.scss';
import React from 'react';
import { Form, FormGroup, FormLabel, FormControl } from 'react-bootstrap';
import AuthContext from '../../../../AuthContext';

class PasswordForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            password: '',
            repeatPassword: '',
            errors: {
                password: '',
                repeatPassword: '',
            }
        }
    }

    componentDidMount() {
        console.log(this.context[0]);
    }

    submitFormHandler(e) {
        e.preventDefault();

        console.log(this.state);
    }
    
    changeHandler(e) {
        this.setState({ [e.target.name]: e.target.value }, () => { //asynchronous

            if(this.state.password?.length < 6) {
                this.setState(state => ({ errors: { ...state.errors, password: 'Password should be at least 6 characters long' } }));
            }else if(this.state.password?.length > 5) {
                this.setState(state => ({ errors: { ...state.errors, password: '' } }));
            }
    
            if(this.state.password && this.state.repeatPassword && this.state.password !== this.state.repeatPassword) {
                this.setState(state => ({ errors: { ...state.errors, repeatPassword: 'Passwords don\'t match' } }));
            }else {
                this.setState(state => ({ errors: { ...state.errors, repeatPassword: '' } }));
            }
        });
    }

    render() {
        return (
            <Form className="password-form" onSubmit={e => this.submitFormHandler(e)}>
                <FormGroup>
                    <FormLabel>New password</FormLabel>
                    <FormControl
                        type="password"
                        name="password"
                        className="form-control"
                        onChange={e => this.changeHandler(e)}
                    />
                </FormGroup>
                {this.state.errors.password && <span className="error">{this.state.errors.password}</span>}
                <FormGroup>
                    <FormLabel>Repeat password</FormLabel>
                    <FormControl
                        type="password"
                        name="repeatPassword"
                        className="form-control"
                        onChange={e => this.changeHandler(e)}
                    />
                </FormGroup>
                {this.state.errors.repeatPassword && <span className="error">{this.state.errors.repeatPassword}</span>}
                <FormGroup className="create-wrapper">
                    <FormControl
                        type="submit"
                        className="create-btn"
                        value="Change"
                        disabled={!this.state.password || !this.state.repeatPassword || this.state.errors.password || this.state.errors.repeatPassword}
                    />
                </FormGroup>
            </Form>
        );
    }
}

PasswordForm.contextType = AuthContext;

export default PasswordForm;