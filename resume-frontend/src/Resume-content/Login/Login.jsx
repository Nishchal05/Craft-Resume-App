import React, { useState } from 'react';
import "./Login.css";
import { Backendlink } from '../../Backendlink';
import { useNavigate } from 'react-router-dom';
import { MatcherContext } from '../../Login';
import { useContext } from 'react';
const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setmatch } = useContext(MatcherContext); 
  const navigate = useNavigate();

  const signupDetail = async () => {
    try {
      const response = await fetch(`${Backendlink}/Login`, {
        method: "POST",
        body: JSON.stringify({  email, password }),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      const data = await response.json();
      if(data.message){
        alert("Donot have an Account")
        navigate('/SignUp')
      }

      if (response.ok) {
        setmatch(true)
        navigate('/');
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className='Signup'>
      <div className='container-signup'>
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
              placeholder='Set Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <button onClick={signupDetail}>Create</button>
        </div>
        <p className='login-link'>Donot have Account <a href='/SignUp'>Register?</a></p>
      </div>
    </div>
  );
};

export default SignUp;
