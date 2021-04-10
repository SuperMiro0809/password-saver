import './PassTableItem.scss';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import PassContext from '../../../../contexts/PassContext';
import MessageContext from '../../../../contexts/MessageContext';
import services from '../../../../services';

function PassTableItem(props) {
    const passContext = useContext(PassContext);
    const messageContext = useContext(MessageContext);

    function deleteButtonHandler(e) {
        services.passwordService.deletePassword(props.id)
        .then(data => {
            messageContext[1]({ status: 'success', text: 'Password deleted' });
            //passContext[1](data);
            const interval = setInterval(function () {
                messageContext[1]('');
                clearInterval(interval);
            }, 2000)
        })
    }   

    return (
        <tr className="pass-tr">
            <td>{props.name}</td>
            <td>{props.auth}</td>
            <td>{props.password}</td>
            <td className="operations">
                <Link className="edit" to={`/dashboard/edit-password/${props.id}`}>
                    <i className="fas fa-pencil-alt" aria-hidden="true"></i>
                </Link>
                <button className="remove" onClick={e => deleteButtonHandler(e)}>
                    <i className="fa fa-trash"></i>
                </button>
            </td >
        </tr >
    );
}

export default PassTableItem;