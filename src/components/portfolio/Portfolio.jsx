import { useEffect, useRef, useState } from "react";
import "./portfolio.css";
import { motion, useInView, useScroll, useTransform } from "framer-motion"; // Changed "motion/react" to "framer-motion"

// Portfolio project items with detailed descriptions
const items = [
  {
    id: 1,
    img: "/p1.png",
    title: "Full Stack E-Commerce Website With Stripe Payment",
    desc: "Built using the MERN stack (MongoDB, Express, React, Node.js) with integrated Stripe payment system. Users can browse, add to cart, and make payments for products. Admin panel for managing products and orders.",
    link: "https://github.com/nehalgarg-23/E-COMMERCE-FULLSTACK-PAYMENT-STRIPE",
  },
  {
    id: 2,
    img: "/p2.png",
    title: "Real-time Chat Application with Python & Gemini AI",
    desc: "Developed a real-time chat application using Python libraries, integrated with Gemini AI for smart message handling and Clerk for user authentication. Includes API integration for additional services.",
    link: "https://github.com/nehalgarg-23/chatbot",
  },
  {
    id: 4,
    img: "/p4.png",
    title: "Weather App Using React & IoT",
    desc: "Developed a weather forecasting app using React framework, IoT devices for real-time data collection, and API integration for weather updates. Provides weather predictions for a week based on live data.",
    link: "https://github.com/nehalgarg-23/WEATHER-APP",
  },
  {
    id: 5,
    img: "/p5.png",
    title: "Crop Recommendation System for Farmers",
    desc: "A system to recommend the best crops for farmers based on soil conditions and local climate. Utilizes a large knowledge base with various crop varieties and incorporates machine learning for predictions.",
    link: "https://github.com/nehalgarg-23/crop-prediction-project",
  },
  {
    id: 6,
    img: "/p6.png",
    title: "Waste Management System Using Next.js & IoT",
    desc: "A waste management system utilizing Next.js for the frontend and IoT for real-time data collection. The system tracks waste levels in bins and sends alerts for collection, helping optimize waste management processes.",
    link: "https://github.com/nehalgarg-23/FAKE-NEWS-DETECTION-PROJECT",
  },
];

// Animation variants for images
const imgVariants = {
  initial: {
    x: -500,
    y: 500,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

// Animation variants for text
const textVariants = {
  initial: {
    x: 500,
    y: 500,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
      staggerChildren: 0.05,
    },
  },
};

// List Item Component
const ListItem = ({ item }) => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <div className="pItem" ref={ref}>
      <motion.div
        variants={imgVariants}
        animate={isInView ? "animate" : "initial"}
        className="pImg"
      >
        <img src={item.img} alt={item.title} />
      </motion.div>
      <motion.div
        variants={textVariants}
        animate={isInView ? "animate" : "initial"}
        className="pText"
      >
        <motion.h1 variants={textVariants}>{item.title}</motion.h1>
        <motion.p variants={textVariants}>{item.desc}</motion.p>
        <motion.a variants={textVariants} href={item.link} target="_blank" rel="noopener noreferrer">
          <button>View Project</button>
        </motion.a>
      </motion.div>
    </div>
  );
};

// Portfolio Component
const Portfolio = () => {
  const [containerDistance, setContainerDistance] = useState(0);
  const ref = useRef(null);

  // Recalculate distance when screen size changes
  useEffect(() => {
    const calculateDistance = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        setContainerDistance(rect.left);
      }
    };

    calculateDistance();

    window.addEventListener("resize", calculateDistance);

    return () => {
      window.removeEventListener("resize", calculateDistance);
    };
  }, []);

  const { scrollYProgress } = useScroll({ target: ref });

  const xTranslate = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -window.innerWidth * items.length]
  );

  return (
    <div className="portfolio" ref={ref}>
      <motion.div className="pList" style={{ x: xTranslate }}>
        <div
          className="empty"
          style={{
            width: window.innerWidth - containerDistance,
          }}
        />
        {items.map((item) => (
          <ListItem item={item} key={item.id} />
        ))}
      </motion.div>
      <section />
      <section />
      <section />
      <section />
      <section />
      <div className="pProgress">
        <svg width="100%" height="100%" viewBox="0 0 160 160">
          <circle
            cx="80"
            cy="80"
            r="70"
            fill="none"
            stroke="#ddd"
            strokeWidth={20}
          />
          <motion.circle
            cx="80"
            cy="80"
            r="70"
            fill="none"
            stroke="#dd4c62"
            strokeWidth={20}
            style={{ pathLength: scrollYProgress }}
            transform="rotate(-90 80 80)"
          />
        </svg>
      </div>
    </div>
  );
};

export default Portfolio;
