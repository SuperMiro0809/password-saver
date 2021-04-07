import './Dashboard.scss';
import { Switch, Route } from 'react-router-dom';
import Header from '../Header/Header';
import DashboardDefault from './DashboardDefault/DashboardDefault';
import PassTable from './PassTable/PassTable';
import AddPassword from './AddPassword/AddPassword';
import Profile from './Profile/Profile';
import EditPassword from './EditPassword/EditPassword';

function Dashboard() {
    return (
        <main className="Dashboard">
            <Header />
            <main className="content">
                <Switch>
                    <Route path="/dashboard" exact>
                        <DashboardDefault title="Password Table">
                            <PassTable />
                        </DashboardDefault>
                    </Route>
                    <Route path="/dashboard/add-password">
                        <DashboardDefault title="Add Password">
                            <AddPassword />
                        </DashboardDefault>
                    </Route>
                    <Route path="/dashboard/edit-password/:id">
                        <DashboardDefault title="Edit Password">
                            <EditPassword />
                        </DashboardDefault>
                    </Route>
                    <Route path="/dashboard/profile">
                        <DashboardDefault title="Profile">
                            <Profile />
                        </DashboardDefault>
                    </Route>
                </Switch>
            </main>
        </main>
    );
}

export default Dashboard;