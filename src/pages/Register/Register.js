import { history } from '../../App';
import React, { useState } from 'react';


async function registerUser(credentials) {
  return fetch('http://localhost:5000/api/user/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
}
function Register() {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [dob, setDob] = useState();
  const [email, setEmail] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const handleSubmit = async e => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("ConfirmPassword isn't match with Password")
    } else {
      const result = await registerUser({
        firstName,
        lastName,
        dob,
        email,
        phoneNumber,
        userName,
        password,
        confirmPassword
      });
      var { isSuccessed, message } = result
      if (isSuccessed === false) {
        alert(message)
      } else {
        history.push('/')
        alert("Register Successful")
      }
    }
  }
  return (
    <div className="App">
      <br/>
      <br/>
      <div className="auth-wrapper">
        <div className="auth-inner">
          <form onSubmit={handleSubmit} >
            <h3>Sign Up</h3>
            <div className="form-group">
              <label>First name</label>
              <input type="text" className="form-control" placeholder="First name" onChange={e => setFirstName(e.target.value)} />
            </div>
            <div className="form-group">
              <label>Last name</label>
              <input type="text" className="form-control" placeholder="Last name" onChange={e => setLastName(e.target.value)} />
            </div>
            <div className="form-group">
              <label>Dob</label>
              <input type="date" className="form-control" placeholder="Dob" onChange={e => setDob(e.target.value)} />
            </div>
            <div className="form-group">
              <label>Email address</label>
              <input type="email" className="form-control" placeholder="Enter email" onChange={e => setEmail(e.target.value)} />
            </div>
            <div className="form-group">
              <label>Phone number</label>
              <input type="number" className="form-control" placeholder="Phone number" onChange={e => setPhoneNumber(e.target.value)} />
            </div>
            <div className="form-group">
              <label>User Name</label>
              <input type="text" className="form-control" placeholder="User Name" onChange={e => setUserName(e.target.value)} />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input type="password" className="form-control" placeholder="Enter password" onChange={e => setPassword(e.target.value)} />
            </div>
            <div className="form-group">
              <label>Confirm Password</label>
              <input type="password" className="form-control" placeholder="Confirm Password" onChange={e => setConfirmPassword(e.target.value)} />
            </div>
            <hr />
            <button type="submit" className="btn btn-primary" style={{ "width": "340px", "marginTop": "20px" }}>Sign Up</button>
            <p className="forgot-password text-right">
              Already registered <a href='' onClick={() => {
                history.push('/login')
              }}>sign in?</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register;
