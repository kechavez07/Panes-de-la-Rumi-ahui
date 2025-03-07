import React from 'react';
import { motion } from "framer-motion";
import { AlertCircle } from "lucide-react";

const Denied = ({ show }) => {
  if (!show) return null;

  return (
    <motion.div
      className="bg-red-500 text-white p-3 rounded-lg flex items-center gap-2 shadow-lg"
      initial={{ x: 0, opacity: 0 }}
      animate={{ x: [10, -10, 10, -10, 0], opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <AlertCircle size={20} />
      <span style={{ textAlign: "center", marginTop: "1rem", marginLeft: "1rem" }}>
    Credenciales denegadas. Inténtalo de nuevo.
  </span>

    </motion.div>
  );
};

export default Denied;
