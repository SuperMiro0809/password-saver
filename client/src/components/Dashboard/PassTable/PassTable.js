import './PassTable.scss';
import { useContext, useState, useEffect } from 'react';
import AuthContext from '../../../AuthContext';
import { Table, Card, Form, Row, Col } from 'react-bootstrap';
import services from '../../../services';
import PassTableItem from './PassTableItem/PassTableItem';

function PassTable() {
    const [user] = useContext(AuthContext);
    const [passwords, setPasswords] = useState([]);
    const jsonPasswords = JSON.stringify(passwords);
    const jsonUser = JSON.stringify(user);

    useEffect(() => {
        services.passwordService.getPasswords(user._id)
        .then(data => {
            setPasswords(data);
            console.log(data);
        })
    }, [jsonPasswords, jsonUser])
    console.log(user);
    return (
        <Card.Body className="component-content">
            <Form>
                <Row>
                    <Col>
                        <Form.Control placeholder="Website/Application" />
                    </Col>
                    <Col>
                        <Form.Control type="submit" />
                    </Col>
                </Row>
            </Form>

            <Table hover className="password-table">
                <thead>
                    <tr>
                        <th>Website/Application</th>
                        <th>Email/Username</th>
                        <th>Password</th>
                    </tr>
                </thead>
                <tbody>
                    {passwords.map(x =>
                        <PassTableItem key={x._id} name={x.name} auth={x.auth} password={x.password} />
                    )}
                </tbody>
            </Table>
        </Card.Body>
    );
}

export default PassTable;