import "./contact.css";
import { useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import ContactSvg from "./ContactSvg";

const listVariant = {
  initial: {
    x: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.2,
    },
  },
};

const Contact = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const ref = useRef();
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    // Remove emailjs service call and replace with your own backend logic if necessary
    setSuccess(true);
    setError(false);
  };

  const isInView = useInView(ref, { margin: "-200px" });

  return (
    <div className="contact" ref={ref} onSubmit={sendEmail}>
      {/* Form Section */}
      <div className="cSection">
        <motion.form
          ref={form}
          variants={listVariant}
          animate={isInView ? "animate" : "initial"}
          className="contactForm"
        >
          <motion.h1 variants={listVariant} className="cTitle">
            Let's Keep In Touch :)  
            <hr />
            <br />
            CONTACT DETAILS
          </motion.h1>
          
          <motion.div variants={listVariant} className="formItem">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="user_username"
              id="name"
              placeholder="Nehal Garg"
              defaultValue="Nehal Garg"
              readOnly
            />
          </motion.div>

          <motion.div variants={listVariant} className="formItem">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="user_email"
              id="email"
              placeholder="nehalgarg23@gmail.com"
              defaultValue="nehalgarg23@gmail.com"
              readOnly
            />
          </motion.div>

          <motion.div variants={listVariant} className="formItem">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              name="user_phone"
              id="phone"
              placeholder=" +91 8608346408"
              defaultValue="+91 8608346408"
              readOnly
            />
          </motion.div>
        </motion.form>
      </div>

      {/* Contact Illustration Section */}
      <div className="cSection">
        <ContactSvg />
      </div>
    </div>
  );
};

export default Contact;
