import './About.scss';
import { Link } from 'react-router-dom';

function About() {
    return (
        <div className="About">
            <h2>About</h2>
            <article className="about-text-wrapper">
                <p>App where you can store and manage your passwords so you never lose them or forget them. Whenever you need a password for a website or application, you can find it in the app.</p>
                <Link to="/register"><button className="btn get-started">Get Started!</button></Link>
            </article>
        </div>
    );
}

export default About;