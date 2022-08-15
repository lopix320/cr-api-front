import React from 'react';
import { Link } from 'react-router-dom';
import useForm from '../../Hooks/useForm';
import Button from '../Forms/Button';
import Input from '../Forms/Input';

const LoginForm = () => {
  const username = useForm();
  const password = useForm();
  // console.log(password.value);

  function handleSubmit(event) {
    event.preventDefault();
    fetch('http://localhost:8887/user/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify( {password, username} ),
    })
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((json) => {
      });
  }
  return (
    <div className="container">
      <h1>Login</h1>
      <br />
      <form action="" onSubmit={handleSubmit}>
        <Input label="Usuário" name="username" type="text" {...username} />
        <Input label="Senha" name="password" type="password" {...password} />
        <Button>Entrar</Button>
      </form>
      <br />
      <Link to="/login/cadastro">Não possui cadastro? Clique aqui!</Link>
      <br />
      <Link to="/login/resetarsenha">Esqueceu sua senha?</Link>
    </div>
  );
};

export default LoginForm;
