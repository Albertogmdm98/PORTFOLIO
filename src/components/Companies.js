// src/components/Companies.jsx
import React from 'react';
import { motion } from 'framer-motion';
import companiesData from '../db/companiesData.json';

function Companies() {
  const listVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: {
      y: 50,
      opacity: 0,
    },
    visible: {
      y: 0,
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
            <img src={`/images/${company.logo}`} alt={company.nombre} />
              {company.link ? (
                <a href={company.link} target="_blank" rel="noopener noreferrer">
                  {company.nombre}
                </a>
              ) : (
                company.nombre
              )}
            </h2>
          </div>
          <hr />
          <h3>{company.puesto} [ <span>{company.fecha}</span> ]</h3>
          <p>{company.descripcion}</p>
          
        </motion.div>
      ))}
    </motion.div>
  );
}

export default Companies;
