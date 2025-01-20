import React from 'react';
import { motion } from 'framer-motion';

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
      <motion.li variants={itemVariants}>
        <a href="#inicio">Inicio</a>
      </motion.li>
      <motion.li variants={itemVariants}>
        <a href="#sobre-mi">Sobre mí</a>
      </motion.li>
      <motion.li variants={itemVariants}>
        <a href="#experiencia">Experiencia</a>
      </motion.li>
      <motion.li variants={itemVariants}>
        <a href="#proyectos">Proyectos</a>
      </motion.li>
      <motion.li variants={itemVariants}>
        <a href="#contacto">Contacto</a>
      </motion.li>
    </motion.ul>
  );
}

export default Menu;
