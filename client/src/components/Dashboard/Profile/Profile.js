import './Profile.scss';
import { useContext } from 'react';
import AuthContext from '../../../AuthContext';
import { Card, Button } from 'react-bootstrap';

function Profile() {
    const [user] = useContext(AuthContext);

    return (
        <Card.Body className="profile">
            <article>
                <img src="/profile.png" height="200" alt="Profile" />
            </article>
            <article className="email-wrapper">
                <p className="profile-email">{user.email}</p>
            </article>
            <article className="profile-options">
                <Button>Change Password</Button>
                <Button>Change Email</Button>
            </article>
        </Card.Body>
    );
}

export default Profile;