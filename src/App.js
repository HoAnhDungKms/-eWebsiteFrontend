import { Switch, Router  } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/cart'
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import { HomeTemplate } from './templates/HomeTemplate/HomeTemplate';
import React, { useState } from 'react';
import useToken from './hook/useToken';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
export const history = createBrowserHistory();

function App() {
  const { token, setToken } = useToken();
  if(!token) {
    return(   
      <Router history={history}>
        <div className="App">
          <div className="auth-wrapper">
            <div className="auth-inner">
              <Switch>
              <Login exact path="/" setToken={setToken} />
              <HomeTemplate exact path="/register" component={Register} />
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    ) 
  }else{
    return (
      <Router history={history}>
          <Switch>
            <HomeTemplate exact path="/home" component={Home} />
            <HomeTemplate exact path="/cart" component={Cart} />
          </Switch>
      </Router>
    );
  }
}

export default App;
