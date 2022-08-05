import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Codigo from './Codigo';
import LoginForm from './LoginForm';
import PasswordReset from './PasswordReset';
import Register from './Register';

const Login = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="cadastro" element={<Register />} />
        <Route path="resetarsenha" element={<PasswordReset />} />
        <Route path="codigo" element={<Codigo />} />
      </Routes>
    </div>
  );
};

export default Login;
