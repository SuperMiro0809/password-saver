function PassTableItem(props) {
    return (
        <tr>
            <td>{props.name}</td>
            <td>{props.auth}</td>
            <td>{props.password}</td>
        </tr>
    );
}

export default PassTableItem;