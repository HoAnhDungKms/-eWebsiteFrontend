import { Switch, Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/cart'
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import { HomeTemplate } from './templates/HomeTemplate/HomeTemplate';
import React from 'react';
import useToken from './hook/useToken';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.js';
export const history = createBrowserHistory();


function App() {
  const { token, setToken } = useToken();
  if (!token) {
    return (
      <Router history={history}>
        <Switch>
          <HomeTemplate exact path="/" component={Home} />
          <Login exact path="/login" setToken={setToken} />
          <HomeTemplate exact path="/register" component={Register} />
        </Switch>
      </Router>
    )
  } else {
    return (
      <Router history={history}>
        <Switch>
        <HomeTemplate exact path="/" component={Home} />
          <HomeTemplate exact path="/cart" component={Cart} />
        </Switch>
      </Router>
    );
  }
}

export default App;
