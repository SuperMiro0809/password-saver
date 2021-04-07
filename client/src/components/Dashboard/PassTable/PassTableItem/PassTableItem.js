import './PassTableItem.scss';
import { useContext } from 'react';
import PassContext from '../PassContext';
import services from '../../../../services';

function PassTableItem(props) {
    const context = useContext(PassContext);

    function deleteButtonHandler(e) {
        services.passwordService.deletePassword(props.id)
        .then(data => {
            context[1](data);
        })
    }   

    return (
        <tr className="pass-tr">
            <td>{props.name}</td>
            <td>{props.auth}</td>
            <td>{props.password}</td>
            <td className="operations">
                <button className="edit">
                    <i className="fas fa-pencil-alt" aria-hidden="true"></i>
                </button>
                <button className="remove" onClick={e => deleteButtonHandler(e)}>
                    <i className="fa fa-trash"></i>
                </button>
            </td >
        </tr >
    );
}

export default PassTableItem;