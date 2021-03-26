import './Header.scss';
import HeaderItem from './HeaderItem/HeaderItem';

function Header() {
    return (
        <aside className="Header">
            <div className="site-title">
                <h5>Password Saver</h5>
            </div>
            <ul>
                <HeaderItem text="Pass Table" icon="fas fa-table" url="/dashboard"/>
                <HeaderItem text="Add Password" icon="fas fa-plus" url="/dashboard/add-password"/>
                <HeaderItem text="User Profile" icon="fas fa-user" url="/dashboard/profile"/>
                <HeaderItem text="Logout" icon="fas fa-sign-out-alt" url="/logout"/>
            </ul>
        </aside>
    );
}

export default Header;