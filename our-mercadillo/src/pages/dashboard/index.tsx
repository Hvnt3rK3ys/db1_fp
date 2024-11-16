import React from 'react';
import Layout from '../../components/layout/Layout';
import styles from '../../styles/Dashboard.module.scss';
import E_Bodega from './E_Bodega';
import E_Cliente from './E_Cliente';
import E_Empleado from './E_Empleado';
import E_Exhibidor from './E_Exhibidor';
import E_Factura from './E_Factura';
import E_Producto from './E_Producto';
import E_Proveedor from './E_Proveedor';

const Dashboard = () => {
  return (
    <Layout>
      <div className={styles.dashboard}>
        <div className={styles.content}>
          <h1>🧐 Gestione sus entidades 🧐</h1>
          
          <div className={styles.entities}>
            <div className={styles.entityCard}>
              <E_Bodega />
            </div>
            <div className={styles.entityCard}>
              <E_Cliente />
            </div>
            <div className={styles.entityCard}>
              <E_Empleado />
            </div>
            <div className={styles.entityCard}>
              <E_Exhibidor />
            </div>
            <div className={styles.entityCard}>
              <E_Factura />
            </div>
            <div className={styles.entityCard}>
              <E_Producto />
            </div>
            <div className={styles.entityCard}>
              <E_Proveedor />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;