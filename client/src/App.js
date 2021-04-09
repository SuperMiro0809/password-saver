import './App.scss';
import { useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import Main from './components/Main/Main';
import Login from './components/User/Login/Login';
import Register from './components/User/Register/Register';
import About from './components/About/About';
import Dashboard from './components/Dashboard/Dashboard';
import ForgotPassword from './components/User/ForgotPassword/ForgotPassword';
import Message from './components/Message/Message';
import MessageContext from './contexts/MessageContext';
import AuthContext from './contexts/AuthContext';
import services from './services';
import isAuth from './hoc/isAuth';
import { setInterval } from 'timers';

function App() {
  const [user, setUser] = useState({});
  const jsonUser = JSON.stringify(user);
  const [message, setMessage] = useState();

  useEffect(() => {
    services.userService.profile()
      .then(data => {
        if (!data.message) {
          setUser(data);
        }
      })
  }, [jsonUser])

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

      {message && <Message status={message.status} message={message.text} />}
      <AuthContext.Provider value={[user, setUser]}>
        <MessageContext.Provider value={[message, setMessage]}>
          <Switch>
            <Route path="/" component={Main} exact />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
            <Route path="/forgot-password" component={ForgotPassword} />
            <Route path="/about" component={About} />
          </Switch>
        </MessageContext.Provider>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
