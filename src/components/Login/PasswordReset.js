import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Forms/Button';
import Input from '../Forms/Input';

const PasswordReset = () => {
  return (
    <div className="container">
      <h2>Confirme o seu email:</h2>
      <h5>Seu email: ga*****@gmail.com</h5>
      <Input style={{ with: '5px' }} />
      <Link to="/login/codigo">
        <Button>Confirmar</Button>
      </Link>
    </div>
  );
};

export default PasswordReset;
