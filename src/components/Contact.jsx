import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const Contact = () => {
  const sidelinks = [
    {
      id: 1,
      name: "Github",
      icon: <FaGithub size={40} />,
      url: "https://github.com/Sheriff-Oladimeji",
    },
    {
      id: 2,
      name: "Linkedin",
      icon: <FaLinkedin size={40} />,
      url: "https://www.linkedin.com/in/sheriff-oladimeji-022362255/",
    },
  ];

  const fadeInUp = {
    initial: { y: 30, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  const socialVariants = {
    initial: { scale: 0.8, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
  };

  return (
    <motion.div
      className="min-h-[80vh] flex flex-col items-center justify-center px-6 py-24 max-w-[1200px] mx-auto relative"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      variants={{
        animate: {
          transition: {
            staggerChildren: 0.2,
          },
        },
      }}
    >
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30" />
      </div>

      <motion.h1
        variants={fadeInUp}
        className="text-4xl sm:text-5xl font-bold text-[#FFFFFF] mb-6"
      >
        Contact Me
      </motion.h1>

      <motion.p
        variants={fadeInUp}
        className="text-center text-[#9CA3AF] text-xl mb-12"
      >
        Got a project we could work on together?
      </motion.p>

      <motion.div
        className="flex items-center gap-8 mt-6 flex-wrap justify-center"
        variants={fadeInUp}
      >
        <motion.a
          href="mailto:dimejiademola5@gmail.com"
          className="group relative h-20 w-20 rounded-full flex items-center justify-center bg-[#122B39] hover:bg-[#1a3c4f] transition-all duration-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          variants={socialVariants}
        >
          <HiOutlineMail
            size={40}
            className="text-[#34D399] group-hover:text-[#4DFFC2] transition-colors duration-300"
          />
          <span className="absolute -bottom-8 text-[#9CA3AF] opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm">
            Email
          </span>
        </motion.a>

        {sidelinks.map((link) => (
          <motion.a
            key={link.id}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative h-20 w-20 rounded-full flex items-center justify-center bg-[#122B39] hover:bg-[#1a3c4f] transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            variants={socialVariants}
          >
            <span className="text-[#34D399] group-hover:text-[#4DFFC2] transition-colors duration-300">
              {link.icon}
            </span>
            <span className="absolute -bottom-8 text-[#9CA3AF] opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm">
              {link.name}
            </span>
          </motion.a>
        ))}
      </motion.div>

      <motion.div variants={fadeInUp} className="mt-24 text-center">
        <p className="text-[#9CA3AF] text-lg">
          Let's create something amazing together
        </p>
      </motion.div>

      <div className="absolute bottom-0 left-0 w-full h-1/2  pointer-events-none" />
    </motion.div>
  );
};

export default Contact;
