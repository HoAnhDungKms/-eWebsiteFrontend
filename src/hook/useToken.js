import { useState } from 'react';

export default function useToken() {
  const getToken = () => {
    const tokenString = localStorage.getItem('token');
    const token = tokenString;
    return token
  };

  const [token, setToken] = useState(getToken());

  const saveToken = userToken => {
    var {resultObj} = userToken;
    localStorage.setItem('token', resultObj);
    setToken(resultObj);
  };

  return {
    setToken: saveToken,
    token
  }
}