import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const RegisterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(135deg, #ff7e5f, #feb47b);
`;

const RegisterCard = styled.div`
  background-color: #ffffff;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  width: 350px;
  text-align: center;
`;

const RegisterTitle = styled.h2`
  font-size: 28px;
  font-weight: 600;
  margin-bottom: 20px;
  color: #333333;
`;

const RegisterForm = styled.form`
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

const RegisterButton = styled.button`
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

const LoginText = styled.p`
  margin-top: 15px;
  font-size: 14px;
  color: #555555;
`;

const LoginLink = styled.a`
  color: #ff7e5f;
  text-decoration: none;
  font-weight: 600;

  &:hover {
    text-decoration: underline;
  }
`;

const Register = () => {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Register:", formData);
    navigate("/"); // Redirect to login after successful registration
  };

  return (
    <RegisterContainer>
      <RegisterCard>
        <RegisterTitle>Register</RegisterTitle>
        <RegisterForm onSubmit={handleSubmit}>
          <InputGroup>
            <Label>Name</Label>
            <Input
              type="text"
              name="name"
              placeholder="Enter your name"
              onChange={handleChange}
            />
          </InputGroup>
          <InputGroup>
            <Label>Email</Label>
            <Input
              type="email"
              name="email"
              placeholder="Enter your email"
              onChange={handleChange}
            />
          </InputGroup>
          <InputGroup>
            <Label>Password</Label>
            <Input
              type="password"
              name="password"
              placeholder="Enter your password"
              onChange={handleChange}
            />
          </InputGroup>
          <RegisterButton>Register</RegisterButton>
        </RegisterForm>
        <LoginText>
          Already have an account?{" "}
          <LoginLink onClick={() => navigate("/")}>
              Login
          </LoginLink>
        </LoginText>
      </RegisterCard>
    </RegisterContainer>
  );
};

export default Register;
