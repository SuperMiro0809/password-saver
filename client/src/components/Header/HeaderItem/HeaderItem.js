import './HeaderItem.scss';
import { NavLink, useHistory } from 'react-router-dom';
import services from '../../../services';

function HeaderItem(props) {
    const history = useHistory();

    function clickHandler(e) {
        if(props.text === 'Logout') {
            e.preventDefault();

            services.userService.logout()
            .then(data => {
                history.push('/');
            })
        }
    }

    return (
        <li className="link-wrapper">
            <NavLink onClick={e => clickHandler(e)} to={props.url}><i className={props.icon}></i> {props.text}</NavLink>
        </li>
    );
}

export default HeaderItem;