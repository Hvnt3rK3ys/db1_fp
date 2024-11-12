import React from 'react';
import styles from '../styles/not.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import my_asset from "../public/Efe.png";

const NotFoundPage: React.FC = () => {
  return (
    <main className={styles.mainNotFound}>
      <Link href="/" prefetch={false}>
        <h1 className={styles.notNumber}>404</h1>
        <Image
          src={my_asset} 
          alt="404 page not found"
          width={700}
          height={700}
          className={styles.imageNot}
        />
        <h2 className={styles.notAdvise}>Page not found</h2>
      </Link>
    </main>
  );
};

export default NotFoundPage;