import React from 'react';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <motion.div 
      className="container mx-auto p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-3xl font-bold mb-4">Welcome!</h2>
      <p className="text-lg">I'm [Nama Anda], a passionate developer specializing in front-end development.</p>
    </motion.div>
  );
};

export default Home;
