import './PassTableItem.scss';

function PassTableItem(props) {
    return (
        <tr className="pass-tr">
            <td>{props.name}</td>
            <td>{props.auth}</td>
            <td>{props.password}</td>
            <td className="operations">
                <button className="edit">
                    <i className="fas fa-pencil-alt" aria-hidden="true"></i>
                </button>
                <button className="remove">
                    <i className="fa fa-trash"></i>
                </button>
            </td >
        </tr >
    );
}

export default PassTableItem;