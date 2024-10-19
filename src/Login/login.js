import React, { useState } from "react";
import './Login.css';
import { useOne } from "useone-react";

const Login = ({setislog}) => {  

  const [login, setLogin] = useState({ username: "", password: "" });
  const [signup, setSignup] = useState(true);
  const [registerData, setRegisterData] = useState({ username: "", password: "" });
  const [token, setToken] = useState(null);
  
  // const [islog,setislog]=useOne("login")

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(login),
      });
      console.log(response)
      const data = await response.json();
      setislog({islog:true})
      if (data.auth) {
        setToken(data.token);
        alert('Login successful!');
       
        localStorage.setItem('token', data.token);
      } else {
        alert('Login failed: ' + data.message);
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8000/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(registerData),
      });
      const data = await response.json();
      alert(data.message);
      setSignup(false);
    } catch (error) {
      console.error('Error during registration:', error);
    }
  };
console.log(login)
  return (
    <> 
    <div className="login"> 
      {!signup ? (
        <> 
          <form onSubmit={handleLogin}>
            <label>
              Username:
              <input
                type="text"
                value={login.username}
                onChange={(e) => setLogin({ ...login, username: e.target.value })}
              />
            </label>
            <label>
              Password:
              <input
                type="password"
                value={login.password}
                onChange={(e) => setLogin({ ...login, password: e.target.value })}
              />
            </label>
            <button type="submit">Submit</button>
            <button type="button" onClick={() => setSignup(true)}>Register</button>
          </form>
        </>
      ) : (
        <>
          <form onSubmit={handleRegister}>
            <label>
              Full Name:
              <input
                type="text"
                onChange={(e) => setRegisterData({ ...registerData, username: e.target.value })}
              />
            </label>
            <label>
              Email Address:
              <input
                type="email"
                onChange={(e) => setRegisterData({ ...registerData, email: e.target.value })}
              />
            </label>
            <label>
              Password:
              <input
                type="password"
                onChange={(e) => setRegisterData({ ...registerData, password: e.target.value })}
              />
            </label>
            <label>
              Confirm Password:
              <input type="password" />
            </label>
            <button type="submit">Submit</button>
            <button type="button" onClick={() => setSignup(false)}>Already have an account? Login</button>
          </form>
        </>
      )} 
      </div>
    </>
  );
};

export default Login;
