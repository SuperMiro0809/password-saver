import './EmailForm.scss';
import React from 'react';
import { Form, FormGroup, FormLabel, FormControl } from 'react-bootstrap';

class EmailForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            errors: {
                email: ''
            }
        }
    }

    submitFormHandler(e) {
        e.preventDefault();
        console.log(this.state);
    }

    changeHandler(e) {
        this.setState({ email: e.target.value });

        if(!/^[\w-\.]+@[\w-\.]+\.[\w-]{2,4}$/.test(e.target.value)) {
            this.setState({ errors: { email: 'Email is not valid' } })
        }else {
            this.setState({ errors: { email: '' } })
        }
    }

    render() {
        return (
            <Form className="password-form" onSubmit={e => this.submitFormHandler(e)}>
                <FormGroup>
                    <FormLabel>New email</FormLabel>
                    <FormControl
                        type="text"
                        name="auth"
                        className="form-control"
                        onChange={e => this.changeHandler(e)}
                    />
                </FormGroup>
                {this.state.errors.email && <span className="error">{this.state.errors.email}</span>}
                <FormGroup className="create-wrapper">
                    <FormControl
                        type="submit"
                        className="create-btn"
                        value="Change"
                        disabled={!this.state.email || this.state.errors.email}
                    />
                </FormGroup>
            </Form>
        );
    }
}

export default EmailForm;