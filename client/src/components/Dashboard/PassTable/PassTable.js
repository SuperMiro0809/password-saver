import './PassTable.scss';
import { Table, Card, Form, Row, Col } from 'react-bootstrap';

function PassTable() {
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
                        <th>#</th>
                        <th>Website/Application</th>
                        <th>Email/Username</th>
                        <th>Password</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                </tbody>
            </Table>
        </Card.Body>
    );
}

export default PassTable;