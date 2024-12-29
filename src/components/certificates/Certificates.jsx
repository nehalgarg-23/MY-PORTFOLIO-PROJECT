import React, { useState } from "react";
import { motion } from "framer-motion";
import "./certificates.css";

// Variants for the certificates section and individual items
const certificatesVariants = {
  initial: {
    x: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.3,
    },
  },
};

const certificateItemVariants = {
  initial: { opacity: 0, scale: 0.7, rotate: 10 },
  animate: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      duration: 0.6,
      type: "spring",
      damping: 10,
      stiffness: 100,
    },
  },
};

const Certificates = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  // Handle image click to toggle expanded state
  const handleClick = (index) => {
    if (expandedIndex === index) {
      // If the same image is clicked, collapse it
      setExpandedIndex(null);
    } else {
      // If a different image is clicked, expand it
      setExpandedIndex(index);
    }
  };
  
  return (
    <div className="certificatesContainer">
      {/* Certificates Section */}
      <motion.div
        variants={certificatesVariants}
        initial="initial"
        animate="animate"
        className="certificatesSection"
      >
        <motion.h2 variants={certificatesVariants}>
          My Certificates and Achievements
        </motion.h2>
        <motion.p variants={certificatesVariants}>
          Here are some of the certificates I've earned throughout my journey!
        </motion.p>
        <motion.div variants={certificatesVariants} className="certificatesList">
          {/* Loop through certificates */}
          {[...Array(9)].map((_, index) => (
            <motion.img
              key={index}
              variants={certificateItemVariants}
              src={`/Certificates${index + 1}.png`}
              alt={`Certificate ${index + 1}`}
              className={expandedIndex === index ? "expanded" : ""}
              onClick={() => handleClick(index)}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Certificates;
