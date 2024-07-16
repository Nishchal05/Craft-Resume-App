import React, { useState } from 'react';
import "./Login.css";
import { Backendlink } from '../../Backendlink';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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

      if (response.ok) {
        localStorage.setItem('user', JSON.stringify(data));
        navigate('/');
      } else {
        alert(data.message || "An error occurred");
        if (data.message === "User already exists") {
          navigate('/login');
        }
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
        <p>Donot have Account <a href='/SignUp'>Register?</a></p>
      </div>
    </div>
  );
};

export default SignUp;
