import React from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import { ReactComponent as User } from '../assets/users.svg';
import Button from './Forms/Button';
const Header = () => {
  return (
    <div className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link className={styles.logo} to={'/'} aria-label="users">
          <User />
        </Link>
        <Link to="/login">
          <Button>Login / Criar</Button>
        </Link>
      </nav>
    </div>
  );
};

export default Header;
