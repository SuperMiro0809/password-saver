import './DashboardDefault.scss';
import { Card } from 'react-bootstrap';

function DashboardDefault(props) {
    console.log(props)
    return (
        <section className="wrapper">
            <h5>{props.title}</h5>

            <Card className="component-card">
                {props.children}
            </Card>
        </section>
    );
}

export default DashboardDefault;