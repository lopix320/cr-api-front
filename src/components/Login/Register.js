import React from 'react';
import useForm from '../../Hooks/useForm';
import Button from '../Forms/Button';
import Input from '../Forms/Input';

const Register = () => {
  const email = useForm('email');
  const username = useForm();
  const password = useForm();
  const imagem = useForm()

  function handleSubmit(event) {
    event.preventDefault();
    console.log(imagem)
    fetch('http://localhost:8887/user/create', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify( {email, password, username, imagem} ),
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
      <h1>Cadastre-se</h1>
      <br />
      <form action="" onSubmit={handleSubmit}>
        <Input label="Email" name="email" type="text" {...email} />
        <Input label="Usuário" name="username" type="text" {...username} />
        <Input label="Senha" name="password" type="password" {...password} />
        <Input label="Imagem" name="imagem" type="file" {...imagem}/>
        <Button>Cadastrar</Button>
      </form>
      <br />
      {/* <Link to="/login/cadastro">Não possui cadastro? Clique aqui!</Link> */}
    </div>
  );
};

export default Register;
