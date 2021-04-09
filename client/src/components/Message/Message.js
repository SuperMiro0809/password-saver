import './Message.scss';
import { Alert } from 'react-bootstrap';

function Message(props) {

    return(
        <div className="Message">
            {props.status === 'success' ?
                <Alert variant="success" className="success">{props.message}</Alert> :
                <Alert variant="danger" className="error">{props.message}</Alert>
            }
        </div>
    );
}

export default Message;