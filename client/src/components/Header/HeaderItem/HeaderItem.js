import './HeaderItem.scss';
import { NavLink } from 'react-router-dom';

function HeaderItem(props) {
    return (
        <li className="link-wrapper">
            <NavLink to={props.url}><i className={props.icon}></i> {props.text}</NavLink>
        </li>
    );
}

export default HeaderItem;