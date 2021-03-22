import './App.css';
import { Switch, Route } from 'react-router-dom';
import Main from './components/Main/Main';
import Login from './components/User/Login/Login';
import Register from './components/User/Register/Register';
import About from './components/About/About';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={Main} exact/>
        <Route path="/register" component={Register} exact/>
        <Route path="/login" component={Login} exact/>
        <Route path="/about" component={About} exact/>
      </Switch>
    </div>
  );
}

export default App;
