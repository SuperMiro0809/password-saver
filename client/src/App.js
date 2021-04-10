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
import isNotAuth from './hoc/isNotAuth';

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
            <Route path="/" component={isNotAuth(Main)} exact />
            <Route path="/dashboard" component={isAuth(Dashboard)} />
            <Route path="/register" component={isNotAuth(Register)} />
            <Route path="/login" component={isNotAuth(Login)} />
            <Route path="/forgot-password" component={isNotAuth(ForgotPassword)} />
            <Route path="/about" component={isNotAuth(About)} />
          </Switch>
        </MessageContext.Provider>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
