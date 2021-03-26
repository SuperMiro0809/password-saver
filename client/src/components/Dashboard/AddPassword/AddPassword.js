import './AddPassword.scss';
import { Component } from 'react';
import { Card, Form, FormControl, FormLabel, Button, FormGroup, DropdownButton, Dropdown, InputGroup } from 'react-bootstrap';

class AddPassword extends Component {

    constructor(props) {
        super(props);

        this.state = {
            placeType: 'Website Url'
        }
    }

    handlePlaceType(e) {
        this.setState({ placeType: e.target.value });
        console.log(this.state);
    }

    render() {
        return (
            <Card.Body className="component-content">
                <Form>
                    {/* <InputGroup>
                        <DropdownButton
                            as={InputGroup.Prepend}
                            variant="outline-secondary"
                            title={this.state.placeType}
                            onSelect={this.handlePlaceType}
                            id="input-group-dropdown-1"
                        >
                            <Dropdown.Item href=""><span>Website Url</span></Dropdown.Item>
                            <Dropdown.Item href=""><span>Application Name</span></Dropdown.Item>
                        </DropdownButton>
                        <FormControl aria-describedby="basic-addon1" />
                    </InputGroup> */}
                    <FormGroup>
                        <FormLabel>Website url/ Application name</FormLabel>
                        <FormControl type="text" className="form-control" />
                    </FormGroup>
                    <FormGroup>
                        <FormLabel>Email/ Username</FormLabel>
                        <FormControl type="text" className="form-control" />
                    </FormGroup>
                    <FormGroup>
                        <FormLabel>Password</FormLabel>
                        <FormControl type="password" className="form-control" />
                    </FormGroup>
                    <FormGroup className="create-wrapper">
                        <Button className="create-btn">Add</Button>
                    </FormGroup>
                </Form>
            </Card.Body>
        );

    }
}

export default AddPassword;