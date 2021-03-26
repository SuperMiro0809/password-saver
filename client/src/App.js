import './App.scss';
import { Switch, Route } from 'react-router-dom';
import Main from './components/Main/Main';
import Login from './components/User/Login/Login';
import Register from './components/User/Register/Register';
import About from './components/About/About';
import Dashboard from './components/Dashboard/Dashboard';

function App() {
  return (
    <div className="App">
      <div className="box">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      
      <Switch>
        <Route path="/" component={Main} exact/>
        <Route path="/dashboard" component={Dashboard}/>
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/about" component={About} />
      </Switch>
    </div>
  );
}

export default App;
