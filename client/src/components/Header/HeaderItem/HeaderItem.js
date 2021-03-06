import './HeaderItem.scss';
import { useContext } from 'react';
import AuthContext from '../../../contexts/AuthContext';
import { NavLink, useHistory } from 'react-router-dom';
import services from '../../../services';

function HeaderItem(props) {
    const history = useHistory();
    const context = useContext(AuthContext);

    function clickHandler(e) {
        if(props.text === 'Logout') {
            e.preventDefault();

            services.userService.logout()
            .then(data => {
                localStorage.removeItem("user-id");
                history.push('/');
                context[1](null);
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