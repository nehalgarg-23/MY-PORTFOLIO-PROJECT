import { TypeAnimation } from "react-type-animation";
import { motion } from "motion/react";

const Speech = () => {
  return (
    <motion.div
      className="bubbleContainer"
      animate={{ opacity: [0, 1] }}
      transition={{ duration: 1 }}
    >
      <div className="bubble">
        <TypeAnimation
          sequence={[
            1000,
            "The future belongs to those who believe in the beauty of their code.",
            1000,
            "Success in tech is not about gender, it's about passion, persistence, and purpose.",
            1000,
            1000,
            "Every woman who dares to dream in tech is already changing the world.",
          ]}
          
          wrapper="span"
          speed={40}
          deletionSpeed={60}
          // omitDeletionAnimation
          repeat={Infinity}
        />
      </div>
      <img src="/logo.png" alt="" />
    </motion.div>
  );
};

export default Speech;
