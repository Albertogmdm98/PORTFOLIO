// Menu.jsx
import React from 'react';
import { motion } from 'framer-motion';
import menuData from '../db/menuData.json'; // Asegúrate de ajustar la ruta según la ubicación del archivo

function Menu() {
  // Definimos variantes para la animación
  const listVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.4, // Retardo entre animaciones de los hijos
      },
    },
  };

  const itemVariants = {
    hidden: {
      y: -50, // Inicia 50px arriba
      opacity: 0,
    },
    visible: {
      y: 0, // Termina en su posición original
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
      },
    },
  };

  return (
    <motion.ul
      className='menu'
      variants={listVariants}
      initial="hidden"
      animate="visible"
    >
      {menuData.menu.map((item, index) => (
        <motion.li key={index} variants={itemVariants}>
          <a href={item.link}>{item.nombre}</a>
        </motion.li>
      ))}
    </motion.ul>
  );
}

export default Menu;
