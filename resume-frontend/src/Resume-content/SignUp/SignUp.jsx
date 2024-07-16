import React, { useState } from 'react';
import "./SignUp.css";
import { Backendlink } from '../../Backendlink';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const signupDetail = async () => {
    try {
      const response = await fetch(`${Backendlink}/signup`, {
        method: "POST",
        body: JSON.stringify({ name, email, password }),
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
        <h1>Register</h1>
        <div>
          <label>
            Name:
            <input
              type='text'
              placeholder='User Name'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
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
        <p>Already Have an Account <a href='/login'>Login?</a></p>
      </div>
    </div>
  );
};

export default SignUp;
