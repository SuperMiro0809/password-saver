import './Main.scss';
import { Link } from 'react-router-dom';

function Main() {
    return (
        <main className="Main">
            <article className="heding-wrapper">
                <h1>Have problems with your passwords?</h1>
                <p>With this app your problem is solved! Here you can store your passwords and access them.</p>
                <Link to="/register"><button className="btn get-started">Get Started!</button></Link>
                <Link to="/about"><button className="btn read-more">Read More</button></Link>
            </article>
        </main>
    );
}

export default Main;