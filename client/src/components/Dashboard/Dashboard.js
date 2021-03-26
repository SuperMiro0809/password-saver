import './Dashboard.scss';
import { Switch, Route } from 'react-router-dom';
import Header from '../Header/Header';
import PassTable from './PassTable/PassTable';

function Dashboard() {
    return (
        <main className="Dashboard">
            <Header />
            <main className="content">
                <Switch>
                    <Route path="/dashboard" component={PassTable}/>
                    <Route path="/admin/add-password" />
                    <Route path="/admin/profile"/>
                </Switch>
            </main>
        </main>
    );
}

export default Dashboard;