import './Profile.scss';
import { useContext, Fragment, useState } from 'react';
import AuthContext from '../../../contexts/AuthContext';
import { Card, Button } from 'react-bootstrap';
import EmailForm from './EmailForm/EmailForm';
import PasswordForm from './PasswordForm/PasswordForm';

function Profile() {
    const [user] = useContext(AuthContext);
    const [formType, setFormType] = useState();

    function changeFormType(e, type) {
        if(type === formType) {
            setFormType(null);
        }else {
            setFormType(type);
        }
    }

    return (
        <Fragment>
            <Card.Body className="profile">
                <article>
                    <img src="/profile.png" height="200" alt="Profile" />
                </article>
                <article className="email-wrapper">
                    <p className="profile-email">{user.email}</p>
                </article>
                <article className="profile-options">
                    <Button onClick={e => changeFormType(e, 'password')}>{ formType !== 'password' ? 'Change Password' : 'Close' }</Button>
                    <Button onClick={e => changeFormType(e, 'email')}>{ formType !== 'email' ? 'Change Email' : 'Close' }</Button>
                </article>
            </Card.Body>
            <Card.Footer>
                { formType ? 
                    formType === 'password' ? 
                    <PasswordForm /> :
                    <EmailForm />
                    :
                    null
                }
            </Card.Footer>
        </Fragment>
    );
}

export default Profile;