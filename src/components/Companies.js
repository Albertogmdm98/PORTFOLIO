// src/components/Companies.jsx
import React from 'react';
import { motion } from 'framer-motion';
import companiesData from '../db/companiesData.json'; // Asegúrate de ajustar la ruta según la ubicación del archivo

function Companies() {
  // Definimos variantes para la animación del contenedor
  const listVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.3, // Retardo entre animaciones de los hijos
      },
    },
  };

  // Definimos variantes para cada elemento de la lista
  const itemVariants = {
    hidden: {
      y: 50, // Inicia 50px abajo
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
    <motion.div
      className='companies'
      variants={listVariants}
      initial="hidden"
      animate="visible"
    >
      {companiesData.companies.map((company, index) => (
        <motion.div key={index} className='company' variants={itemVariants}>
          <div className='company-header'>
            <h2>
              {company.link ? (
                <a href={company.link} target="_blank" rel="noopener noreferrer">
                  {company.nombre}
                </a>
              ) : (
                company.nombre
              )}
            </h2>
          </div>
          <h3>{company.puesto}</h3>
          <p>{company.descripcion}</p>
          <p>Potenciales clientes: {company.clientes}</p>
          <span>{company.fecha}</span>
        </motion.div>
      ))}
    </motion.div>
  );
}

export default Companies;
