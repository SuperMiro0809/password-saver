import './EditPassword.scss';
import React from 'react';
import { withRouter } from 'react-router-dom';
import { Card, Form, FormControl, FormLabel, FormGroup } from 'react-bootstrap';
import MessageContext from '../../../contexts/MessageContext';
import services from '../../../services';

class EditPassword extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            auth: '',
            password: ''
        }
    }

    componentDidMount() {
        services.passwordService.getPasswordById(this.props.match.params.id)
        .then(data => {
            this.setState({ 
                name: data.name,
                auth: data.auth,
                password: data.password
            });
        })
    }

    submitFormHandler(e) {
        e.preventDefault();

        services.passwordService.editPassword(this.props.match.params.id, this.state.name, this.state.auth, this.state.password)
        .then(data => {
            this.context[1]({ status: 'success', text: data.message });
            const interval = setInterval(function () {
                this.context[1]('');
                clearInterval(interval);
                this.props.history.push('/dashboard');
            }.bind(this), 1000)
        })
    }

    changeHandler(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    render() {
        return (
            <Card.Body className="component-content">
                <Form onSubmit={e => this.submitFormHandler(e)}>
                    <FormGroup>
                        <FormLabel>Website url/ Application name</FormLabel>
                        <FormControl
                            type="text"
                            name="name"
                            className="form-control"
                            value={this.state.name}
                            onChange={e => this.changeHandler(e)}
                        />
                    </FormGroup>
                    <FormGroup>
                        <FormLabel>Email/ Username</FormLabel>
                        <FormControl
                            type="text"
                            name="auth"
                            className="form-control"
                            value={this.state.auth}
                            onChange={e => this.changeHandler(e)}
                        />
                    </FormGroup>
                    <FormGroup>
                        <FormLabel>Password</FormLabel>
                        <FormControl
                            type="password"
                            name="password"
                            className="form-control"
                            value={this.state.password}
                            onChange={e => this.changeHandler(e)}
                        />
                    </FormGroup>
                    <FormGroup className="edit-wrapper">
                        <FormControl
                            type="submit"
                            className="edit-btn"
                            value="Edit"
                            disabled={!this.state.name || !this.state.auth || !this.state.password}
                        />
                    </FormGroup>
                </Form>
            </Card.Body>
        );

    }
}

EditPassword.contextType = MessageContext;

export default withRouter(EditPassword);