import './Profile.scss';
import { Card, Button } from 'react-bootstrap';

function Profile() {
    return (
        <Card.Body className="profile">
            <article>
                <img src="/profile.png" height="200" />
            </article>
            <article className="email-wrapper">
                <p className="profile-email">email@abv.bg</p>
            </article>
            <article className="profile-options">
                <Button>Change Password</Button>
                <Button>Change Email</Button>
            </article>
        </Card.Body>
    );
}

export default Profile;