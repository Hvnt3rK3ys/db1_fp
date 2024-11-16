import React, { useState } from 'react';
import Link from 'next/link';
import { MdOutlineMenuOpen } from 'react-icons/md';
import { FaWindowClose } from 'react-icons/fa';
import styles from '../../styles/Sidebar.module.scss';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button
        className={`${styles.menuButton} ${isOpen ? styles.menuButtonOpen : ''}`}
        onClick={toggleSidebar}
      >
        {isOpen ? <FaWindowClose /> : <MdOutlineMenuOpen />}
      </button>
      {isOpen && (
        <aside className={styles.sidebar}>
          <ul>
            <li><Link href="/dashboard/E_Bodega">Bodega</Link></li>
            <li><Link href="/dashboard/E_Cliente">Cliente</Link></li>
            <li><Link href="/dashboard/E_Empleado">Empleado</Link></li>
            <li><Link href="/dashboard/E_Exhibidor">Exhibidor</Link></li>
            <li><Link href="/dashboard/E_Factura">Factura</Link></li>
            <li><Link href="/dashboard/E_Producto">Producto</Link></li>
            <li><Link href="/dashboard/E_Proveedor">Proveedor</Link></li>
          </ul>
        </aside>
      )}
    </>
  );
};

export default Sidebar;