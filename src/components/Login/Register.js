import React from 'react';
import useForm from '../../Hooks/useForm';
import Button from '../Forms/Button';
import Input from '../Forms/Input';

const Register = () => {
  const email = useForm('email');
  const username = useForm();
  const password = useForm();

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="container">
      <h1>Cadastre-se</h1>
      <br />
      <form action="" onSubmit={handleSubmit}>
        <Input label="Email" name="email" type="text" {...email} />
        <Input label="Usuário" name="username" type="text" {...username} />
        <Input label="Senha" name="password" type="password" {...password} />
        <Input label="Imagem" name="imagem" type="file" />
        <Button>Cadastrar</Button>
      </form>
      <br />
      {/* <Link to="/login/cadastro">Não possui cadastro? Clique aqui!</Link> */}
    </div>
  );
};

export default Register;
