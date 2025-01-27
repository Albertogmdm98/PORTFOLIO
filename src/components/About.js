import React from 'react';
import { motion } from 'framer-motion';
import alberto_1 from '../assets/images/alberto_1.png';

function About() {
  return (
    <div className="about" style={{ overflowX: 'hidden' }}>
      <div className='text-about'>
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 2, ease: 'easeOut' }}
        >
          <h1>
            Alberto
            <br /> 
            Gallardo
          </h1>
          <p>
            Desarrollador Full-Stack
          </p>
        </motion.div>
      </div>

      <motion.img
        className="alberto_1"
        src={alberto_1}
        alt="Foto Alberto"
        // Animación para la imagen
        initial={{opacity: 0, x: 100 }}
        animate={{opacity: 1, x: 0 }}
        transition={{ duration: 2, ease: "easeOut" }}
        style={{ position: 'relative' }}
      />
    </div>
  );
}

export default About;
