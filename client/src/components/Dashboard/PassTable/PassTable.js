import './PassTable.scss';
import { useContext, useState, useEffect, useRef } from 'react';
import AuthContext from '../../../contexts/AuthContext';
import { Table, Card, Form, Row, FormGroup } from 'react-bootstrap';
import services from '../../../services';
import PassTableItem from './PassTableItem/PassTableItem';
import PassContext from '../../../contexts/PassContext';

function PassTable() {
    const [user] = useContext(AuthContext);
    const [passwords, setPasswords] = useState([]);
    const inputRef = useRef();
    //const jsonPasswords = JSON.stringify(passwords);
    //const jsonUser = JSON.stringify(user);

    useEffect(() => {
        if(user._id) {
            loadPasswords();
        }    
    }, [user._id])

    function loadPasswords() {
        services.passwordService.getPasswords(user._id)
                .then(data => {
                    if(inputRef.current) {
                        inputRef.current.value = '';
                    }
                    setPasswords(data);
        })
    }

    function submitFilterFormHandler(e) {
        e.preventDefault();

        services.passwordService.filterPasswords(user._id, e.target.name.value)
            .then(data => {
                setPasswords(data);
            })
    }

    return (
        <Card.Body className="component-content">
            <Form onSubmit={e => submitFilterFormHandler(e)}>
                <Row>
                    <FormGroup className="col-xs-12 col-sm-12 col-md-12 col-lg-6 mb-4">
                        <Form.Control type="text" name="name" placeholder="Website/Application" ref={inputRef} />
                    </FormGroup>
                    <FormGroup className="col-xs-12 col-sm-12 col-md-12 col-lg-3 mb-4">
                        <Form.Control className="filter-btn" type="submit" value="Filter" />
                    </FormGroup>
                    <FormGroup className="col-xs-12 col-sm-12 col-md-12 col-lg-3 mb-4">
                        <Form.Control onClick={e => loadPasswords()} className="clear-btn" type="button" value="Clear" />
                    </FormGroup>
                </Row>
            </Form>

            <Table hover className="password-table">
                <thead>
                    <tr>
                        <th scope="col">Website/Application</th>
                        <th scope="col">Email/Username</th>
                        <th scope="col">Password</th>
                        <th scope="col">Operations</th>
                    </tr>
                </thead>
                <tbody>
                    <PassContext.Provider value={[passwords, setPasswords]}>
                        {passwords.length !== 0 ?
                            passwords.map(x =>
                                <PassTableItem key={x._id} name={x.name} auth={x.auth} password={x.password} id={x._id} />
                            ) :
                            <tr className="no-info">
                                <td colSpan="4">No information</td>
                            </tr>
                        }
                    </PassContext.Provider>
                </tbody>
            </Table>
        </Card.Body>
    );
}

export default PassTable;