import React from 'react';
import { Link } from 'react-router-dom';
import useForm from '../../Hooks/useForm';
import Button from '../Forms/Button';
import Input from '../Forms/Input';

const LoginForm = () => {
  const username = useForm('email');
  const password = useForm();
  // console.log(password.value);

  function handleSubmit(event) {
    event.preventDefault();
    if (username.validate() && password.validate()) {
      console.log('deu bom');
    } else {
      console.log('deu ruim');
    }
    console.log({ usuario: username.value, senha: password.value });
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
