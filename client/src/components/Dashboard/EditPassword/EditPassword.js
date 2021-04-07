import './EditPassword.scss';
import React from 'react';
import { Redirect, withRouter } from 'react-router-dom';
import { Card, Form, FormControl, FormLabel, FormGroup } from 'react-bootstrap';
import services from '../../../services';

class EditPassword extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            auth: '',
            password: '',
            redirect: false
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
            this.setState({ redirect: true })
        })
    }

    changeHandler(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    render() {
        if(this.state.redirect) {
            return <Redirect to="/dashboard"/>
        }

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
                        />
                    </FormGroup>
                </Form>
            </Card.Body>
        );

    }
}

export default withRouter(EditPassword);