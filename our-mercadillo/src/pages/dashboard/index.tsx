import React from 'react';
import Layout from '../../components/layout/Layout';
import styles from '../../styles/Dashboard.module.scss';
import Image from 'next/image';
import img_bodega from '../../public/covers/bodega.jpg';
import img_cliente from '../../public/covers/cliente.jpg';
import img_empleado from '../../public/covers/empleado.jpg';
import img_exhibidor from '../../public/covers/exhibidor.jpg';
import img_factura from '../../public/covers/factura.jpg';
import img_producto from '../../public/covers/producto.jpg';
import img_proveedor from '../../public/covers/proveedor.jpg';
import withAuth from '../../hoc/withAuth';

const Dashboard = () => {
  return (
    <Layout>
      <div className={styles.dashboard}>
        <div className={styles.content}>
          <h1>🧐 Gestione sus entidades 🧐</h1>
          
          <div className={styles.entities}>
            <div className={styles.entityCard}>
              <Image src={img_bodega} alt="Bodega" layout="fill" className={styles.cardImage} />
              <h2>Bodega</h2>
            </div>
            <div className={styles.entityCard}>
              <Image src={img_cliente} alt="Cliente" layout="fill" className={styles.cardImage} />
              <h2>Cliente</h2>
            </div>
            <div className={styles.entityCard}>
              <Image src={img_empleado} alt="Empleado" layout="fill" className={styles.cardImage} />
              <h2>Empleado</h2>
            </div>
            <div className={styles.entityCard}>
              <Image src={img_exhibidor} alt="Exhibidor" layout="fill" className={styles.cardImage} />
              <h2>Exhibidor</h2>
            </div>
            <div className={styles.entityCard}>
              <Image src={img_factura} alt="Factura" layout="fill" className={styles.cardImage} />
              <h2>Factura</h2>
            </div>
            <div className={styles.entityCard}>
              <Image src={img_producto} alt="Producto" layout="fill" className={styles.cardImage} />
              <h2>Producto</h2>
            </div>
            <div className={styles.entityCard}>
              <Image src={img_proveedor} alt="Proveedor" layout="fill" className={styles.cardImage} />
              <h2>Proveedor</h2>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default withAuth(Dashboard);