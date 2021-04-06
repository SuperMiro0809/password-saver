import './HeaderItem.scss';
import { useContext } from 'react';
import AuthContext from '../../../AuthContext';
import { NavLink, useHistory } from 'react-router-dom';
import services from '../../../services';

function HeaderItem(props) {
    const history = useHistory();
    const [user, setUser] = useContext(AuthContext);

    function clickHandler(e) {
        if(props.text === 'Logout') {
            e.preventDefault();

            services.userService.logout()
            .then(data => {
                history.push('/');
                setUser(null);
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