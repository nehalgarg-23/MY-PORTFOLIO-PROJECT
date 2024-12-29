import { useEffect, useRef, useState } from "react";
import "./skills.css";
import { motion, useInView, useScroll, useTransform } from "motion/react";

const skills = {
  languages: [
    {
      id: 1,
      img: "/skills1.png",
      title: "Programming Languages",
      desc: "Proficient in C++, C, Javascript and Python. Experience in writing efficient, clean, and maintainable code.",
    },
  ],
  frontend: [
    {
      id: 2,
      img: "/skills2.png",
      title: "Frontend Development",
      desc: "Skilled in React.js, Bootstrap, Tailwind CSS, HTML, and CSS for building responsive and user-friendly interfaces.",
    },
  ],
  backend: [
    {
      id: 3,
      img: "/skills3.png",
      title: "Backend & Databases",
      desc: "Experience with Firebase, MongoDB, Express.js, Node.js, and Flask for developing scalable backend systems.",
    },
  ],
  csFundamentals: [
    {
      id: 4,
      img: "/skills4.png",
      title: "CS Fundamentals",
      desc: "Strong foundation in Data Structures, Operating Systems, DBMS, and Machine Learning concepts.",
    },
  ],
  otherSkills: [
    {
      id: 5,
      img: "/skills5.png",
      title: "Emerging Technologies",
      desc: "Hands-on experience with Cloud Computing (GCP), Python & Flask, Next.js, and Generative AI tools.",
    },
  ],
};

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
const SkillItem = ({ skill }) => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <div className="sItem" ref={ref}>
      <motion.div
        variants={imgVariants}
        animate={isInView ? "animate" : "initial"}
        className="sImg"
      >
        <img src={skill.img} alt={skill.title} />
      </motion.div>
      <motion.div
        variants={textVariants}
        animate={isInView ? "animate" : "initial"}
        className="sText"
      >
        <motion.h1 variants={textVariants}>{skill.title}</motion.h1>
        <motion.p variants={textVariants}>{skill.desc}</motion.p>
      </motion.div>
    </div>
  );
};

// Skills Component
const Skills = () => {
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
    [0, -window.innerWidth * Object.values(skills).length]
  );

  return (
    <div className="skills" ref={ref}>
      <motion.div className="sList" style={{ x: xTranslate }}>
        <div
          className="empty"
          style={{
            width: window.innerWidth - containerDistance,
          }}
        />
        {Object.values(skills).map((skillCategory) =>
          skillCategory.map((skill) => (
            <SkillItem skill={skill} key={skill.id} />
          ))
        )}
      </motion.div>
      <section />
      <section />
      <section />
      <section />
      <section />
      <div className="sProgress">
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
            stroke="#4285F4"
            strokeWidth={20}
            style={{ pathLength: scrollYProgress }}
            transform="rotate(-90 80 80)"
          />
        </svg>
      </div>
    </div>
  );
};

export default Skills;
