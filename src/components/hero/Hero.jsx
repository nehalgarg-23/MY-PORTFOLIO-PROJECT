import { Canvas } from "@react-three/fiber";
import "./hero.css";
import Speech from "./Speech";
import { motion } from "framer-motion";
import Shape from "./Shape";
import { Suspense } from "react";

const followVariants = {
  initial: { y: -100, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.2,
    },
  },
};

const introVariants = {
  hover: {
    scale: 1.05,
    transition: { duration: 0.5 },
  },
  tap: { scale: 0.95 },
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="hSection left">
        {/* TITLE */}
        <motion.h1
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="hTitle"
        >
          Hey There,
          <br />
          <span>I'm Nehal Garg!</span>
        </motion.h1>

        {/* Contact & Social Links Section */}
        <motion.div
          variants={followVariants}
          initial="initial"
          animate="animate"
          className="contactSection"
        >
          {/* Intro Section */}
          <motion.a
            href="#about"
            className="introLink"
            variants={introVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <p classname='left'>
            I am Nehal Garg, a pre-final year Computer Science and Engineering student at
            Netaji Subhash University of Technology (NSUT). With a strong passion for
            technology and mathematics, I specialize in web development and have a solid grasp of data
            structures and algorithms in C++ and also pyhton and cloud computing. </p>

<p className="right">
            Beyond coding, I enjoy writing tech blogs,research papers, and articles.
             My interest also extends to game theory, where I explore strategic decision
             -making and its applications. As an emerging tech enthusiast,
            I am driven by curiosity and creativity, striving to make meaningful contributions
            to the tech communities.</p>
          </motion.a>
<br></br>
<br></br>
          {/* Social Media Links */}
          <motion.div
            variants={followVariants}
            className="socialLinks"
            animate={{ x: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          >
            <motion.a variants={followVariants} href="https://www.linkedin.com/in/nehal-garg-742482258">
              <img src="/linkedin.png" alt="LinkedIn" />
            </motion.a>
            <motion.a variants={followVariants} href="https://github.com/nehalgarg-23">
              <img src="/github.jpg" alt="GitHub" />
            </motion.a>
            <motion.a variants={followVariants} href="https://leetcode.com/u/nehal23/">
              <img src="/leetcode.png" alt="LeetCode" />
            </motion.a>
            <motion.a variants={followVariants} href="https://www.geeksforgeeks.org/user/nehalgarg23/">
              <img src="/gfg.png" alt="GFG" />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Scroll SVG */}
     
      </div>

      <div className="hSection right">
        {/* BUBBLE */}
        <Speech />
      </div>

      <div className="bg">
        {/* 3D Canvas */}
        <Canvas>
          <Suspense fallback={<div>Loading...</div>}>
            <Shape />
          </Suspense>
        </Canvas>
        {/* Animated Background Image */}
        <motion.div
          initial={{ scale: 1.1, opacity: 0.8 }}
          animate={{ scale: [1.1, 1.2, 1.1], opacity: 1 }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="hImg"
        >
          <img src="./hero.jpg"></img>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
