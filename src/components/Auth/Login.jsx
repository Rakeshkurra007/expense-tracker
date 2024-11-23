// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom'; // Import useNavigate
// import styled from 'styled-components';

// const LoginWrapper = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   height: 100vh;
//   background: linear-gradient(to right, #ff7e5f, #feb47b);
//   form {
//     background: white;
//     padding: 2rem;
//     border-radius: 8px;
//     box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
//   }
//   input {
//     display: block;
//     width: 100%;
//     padding: 0.8rem;
//     margin-bottom: 1rem;
//     border: 1px solid #ccc;
//     border-radius: 4px;
//   }
//   button {
//     width: 100%;
//     padding: 0.8rem;
//     background: #ff7e5f;
//     color: white;
//     border: none;
//     border-radius: 4px;
//     cursor: pointer;
//     transition: background 0.3s;
//   }
//   button:hover {
//     background: #ff6a42;
//   }
//   .navigate-link {
//     text-align: center;
//     margin-top: 1rem;
//     a {
//       color: #ff7e5f;
//       text-decoration: none;
//     }
//   }
// `;

// const Login = () => {
//   const [formData, setFormData] = useState({ email: '', password: '' });
//   const navigate = useNavigate(); // Initialize useNavigate

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Login:', formData);
//     navigate('/dashboard'); // Navigate to Dashboard on successful login
//   };

//   return (
//     <LoginWrapper>
//       <form onSubmit={handleSubmit}>
//         <h2>Login</h2>
//         <input type="email" name="email" placeholder="Email" onChange={handleChange} />
//         <input type="password" name="password" placeholder="Password" onChange={handleChange} />
//         <button type="submit">Login</button>
//       </form>
//       <div className="navigate-link">
//         <p>Don't have an account? <a href="#" onClick={() => navigate('/register')}>Register</a></p>
//       </div>
//     </LoginWrapper>
//   );
// };

// export default Login;

import {React, useState} from "react";
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";

const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(135deg, #ff7e5f, #feb47b);
`;

const LoginCard = styled.div`
  background-color: #ffffff;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  width: 350px;
  text-align: center;
`;

const LoginTitle = styled.h2`
  font-size: 28px;
  font-weight: 600;
  margin-bottom: 20px;
  color: #333333;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const InputGroup = styled.div`
  text-align: left;
`;

const Label = styled.label`
  font-size: 14px;
  color: #555555;
  margin-bottom: 5px;
  display: block;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #dddddd;
  border-radius: 8px;
  font-size: 14px;
  transition: border-color 0.3s ease-in-out;

  &:focus {
    border-color: #ff7e5f;
    outline: none;
  }
`;

const LoginButton = styled.button`
  padding: 12px;
  font-size: 16px;
  background-color: #ff7e5f;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #e76d50;
  }
`;

const RegisterText = styled.p`
  margin-top: 15px;
  font-size: 14px;
  color: #555555;
`;

const RegisterLink = styled.a`
  color: #ff7e5f;
  text-decoration: none;
  font-weight: 600;

  &:hover {
    text-decoration: underline;
  }
`;

const Login = () => {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const navigate = useNavigate(); // Initialize useNavigate

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login:', formData);
    navigate('/dashboard'); // Navigate to Dashboard on successful login
  };
  return (
    <LoginContainer>
      <LoginCard>
        <LoginTitle>Login</LoginTitle>
        <LoginForm onSubmit={handleSubmit}>
          <InputGroup>
            <Label>Email</Label>
            <Input type="email" placeholder="Enter your email"  onChange={handleChange} />
          </InputGroup>
          <InputGroup>
            <Label>Password</Label>
            <Input type="password" placeholder="Enter your password"  onChange={handleChange} />
          </InputGroup>
          <LoginButton>Login</LoginButton>
        </LoginForm>
        <RegisterText>
          Don’t have an account? <RegisterLink onClick={() => navigate('/register')}>Register</RegisterLink>
        </RegisterText>
      </LoginCard>
    </LoginContainer>
  );
};

export default Login;
