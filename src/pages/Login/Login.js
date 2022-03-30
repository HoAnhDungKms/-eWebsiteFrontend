import { history } from '../../App';
import React, { useState } from 'react';


async function loginUser(credentials) {
  return fetch('http://localhost:5000/api/user/authenticate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
}
function Login({ setToken }) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password
    });
    var { isSuccessed, message } = token
    if (isSuccessed === false) {
      alert(message)
    } else {
      history.push('/')
      localStorage.setItem('Name', username);
      setToken(token);
    }
  }
  return (
    <div className="App">
      <div className="auth-wrapper">
        <div className="auth-inner">
          <form onSubmit={handleSubmit}>
            <h3>Sign In</h3>
            <div className="form-group">
              <label>UserName</label>
              <input type="text" className="form-control" placeholder="Enter username" onChange={e => setUserName(e.target.value)} />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input type="password" className="form-control" placeholder="Enter password" onChange={e => setPassword(e.target.value)} />
            </div>
            <div className="form-group">
              <div className="custom-control custom-checkbox">
                <input type="checkbox" className="custom-control-input" id="customCheck1" />
                <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
              </div>
            </div>
            <hr />
            <button type="submit" className="btn btn-primary" style={{ "width": "340px", "marginTop": "10px" }}>Submit</button>
            <p className="forgot-password text-right">
              <a href='' onClick={() => { history.push('/register') }}>Register?</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}
export default Login;
