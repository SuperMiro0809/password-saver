import './AddPassword.scss';
import { Component } from 'react';
import { Card, Form, FormControl, FormLabel, FormGroup } from 'react-bootstrap';
import services from '../../../services';

class AddPassword extends Component {

    constructor(props) {
        super(props);

        this.state = {
            placeType: 'Website Url',
            name: '',
            auth: '',
            password: ''
        }
    }

    changeHandler(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    submitFormHandler(e) {
        e.preventDefault();

        services.passwordService.AddPassword(this.state.name, this.state.auth, this.state.password)
        .then(data => {
            console.log(data);
        })
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
                            onChange={e => this.changeHandler(e)} 
                        />
                    </FormGroup>
                    <FormGroup>
                        <FormLabel>Email/ Username</FormLabel>
                        <FormControl 
                            type="text" 
                            name="auth"
                            className="form-control"
                            onChange={e => this.changeHandler(e)}  
                        />
                    </FormGroup>
                    <FormGroup>
                        <FormLabel>Password</FormLabel>
                        <FormControl 
                            type="password" 
                            name="password"
                            className="form-control" 
                            onChange={e => this.changeHandler(e)} 
                        />
                    </FormGroup>
                    <FormGroup className="create-wrapper">
                        <FormControl 
                            type="submit" 
                            className="create-btn"
                            value="Add"
                        />
                    </FormGroup>
                </Form>
            </Card.Body>
        );

    }
}

export default AddPassword;