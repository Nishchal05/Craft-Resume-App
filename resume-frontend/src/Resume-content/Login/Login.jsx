import React, { useState, useContext } from 'react';
import "./Login.css";
import { Backendlink } from '../../Backendlink';
import { useNavigate } from 'react-router-dom';
import { MatcherContext } from '../../Login';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setMatch } = useContext(MatcherContext); 
  const navigate = useNavigate();
  const register=()=>{
    navigate('/SignUp')
  }

  const loginDetail = async () => {
    try {
      const response = await fetch(`${Backendlink}/login`, {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      const data = await response.json();
      if (response.status === 404) {
        alert("Account does not exist. Please register.");
        navigate('/SignUp');
      } else if (response.ok) {
        setMatch(true);
        navigate('/');
      } else {
        alert(data.message || "An error occurred");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className='Login'>
      <div className='container-login'>
        <h1>Login</h1>
        <div>
          <label>
            Email:
            <input
              type='email'
              placeholder='User Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label>
            Password:
            <input
              type='password'
              placeholder='Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <button onClick={loginDetail}>Login</button>
        </div>
        <p className='login-link'>Don't have an Account? <a onClick={register}>Register</a></p>
      </div>
    </div>
  );
};

export default Login;
