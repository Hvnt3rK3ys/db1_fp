import React from 'react';
import styles from '../../styles/Header.module.scss';
import Image from 'next/image';
import our_logo from '../../public/Logo.png';
import { useRouter } from 'next/router';

const Header = () => {
  const router = useRouter();
  const handleLogout = () => {
    // Perform logout logic here
    router.push('/');
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Image
          src={our_logo}
          alt="Logo of our mercadillo"
          width={50}
          height={50}
          className={styles.our_logo}
        />
      </div>
      <nav className={styles.nav}>
        <ul>
          <li><a href="/dashboard">Inicio</a></li>
          <li>Usuario</li>
          <li><button onClick={handleLogout}>Cerrar Sesión</button></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;