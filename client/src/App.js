import './App.scss';
import { useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import Main from './components/Main/Main';
import Login from './components/User/Login/Login';
import Register from './components/User/Register/Register';
import About from './components/About/About';
import Dashboard from './components/Dashboard/Dashboard';
import AuthContext from './AuthContext';
import Cookies from 'js-cookie';
import services from './services';

function App() {
  const [user, setUser] = useState({});
  const jsonUser = JSON.stringify(user);

  useEffect(() => {
    services.userService.profile()
    .then(data => {
        if(!data.message) {
            setUser(data);
            console.log(user)
        }
    })
  }, [ jsonUser ])

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
      
      <AuthContext.Provider value={[user, setUser]}>
        <Switch>
          <Route path="/" component={Main} exact/>
          <Route path="/dashboard" component={Dashboard}/>
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/about" component={About} />
        </Switch>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
