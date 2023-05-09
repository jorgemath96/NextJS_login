import axios from 'axios';
import { useState } from 'react';
// require('dotenv').config();


function LoginPage() {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    });
  }

  const handleLogin = async (e) => {
    e.preventDefault();
    const eurl = 'http://localhost:4444'
    const url = eurl + '/login';
    console.log(eurl);
    try {
      const response = await axios.post(
        url,
        credentials,
        {
          headers: {
            'Content-Type': 'application/json',
          },
          withCredentials: true,
          setCredentials: true,
        }
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <form onSubmit={handleLogin}>
      <input type="text" name="username" placeholder='Usuario' onChange={handleChange} autoFocus/>
      <input type="password" name="password" placeholder='Contraseña' onChange={handleChange} />
      <button>Login</button>
    </form>
  );
}

export default LoginPage;