import './PasswordForm.scss';
import React from 'react';
import { withRouter } from 'react-router-dom';
import { Form, FormGroup, FormLabel, FormControl } from 'react-bootstrap';
import services from '../../../../services';

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
        console.log(this.props);
    }

    submitFormHandler(e) {
        e.preventDefault();

        services.userService.changePassword(this.props.user[0].email, this.state.password)
        .then(data => {
            services.userService.logout()
            .then(() => {
                this.props.message[1]({ status: 'success', text: data.message });
                const interval = setInterval(function () {
                    this.props.message[1]('');
                    this.props.history.push('/login');
                    this.props.user[1](null);
                    clearInterval(interval);
                }.bind(this), 1000)
            })
        })
        .catch(err => {
            this.props.message[1]({ status: 'error', text: err.message});
            const interval = setInterval(function () {
                this.props.message[1]('');
                clearInterval(interval);
            }, 2000)
        })
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

export default withRouter(PasswordForm);