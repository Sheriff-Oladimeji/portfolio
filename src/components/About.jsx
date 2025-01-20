/* eslint-disable react/no-unescaped-entities */

import { motion } from "framer-motion";

const About = () => {
  const fadeInUp = {
    initial: { y: 30, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  const skills = [
    ["React", "JavaScript (ES6+)", "Python", "React Native/Expo"],
    ["Git & GitHub", "TypeScript", "Next.js", "Redux/Zustand"],
  ];

  return (
    <motion.main
      className="relative px-6 py-24 min-h-screen flex items-center max-w-[1200px] mx-auto"
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
      <div className="flex justify-between flex-col gap-16 w-full">
        <div className="flex flex-col gap-8">
          <motion.h1
            variants={fadeInUp}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#FFFFFF]"
          >
            Me, Myself & I
          </motion.h1>

          <motion.div variants={fadeInUp} className="flex flex-col gap-6">
            <p className="text-[#9CA3AF] text-lg leading-relaxed">
              I'm Sheriff Oladimeji, a curious full-stack developer with a
              passion for creating intuitive digital experiences. Though my
              expertise centers around frontend development, I enjoy working
              across the entire stack to bring ideas to life.
            </p>

            <p className="text-[#9CA3AF] text-lg leading-relaxed">
              I first started coding out of fascination with hacking and a
              desire to understand the inner workings of computers and systems.
              What began as a hobby fueled by curiosity has grown into a craft I
              am deeply passionate about. I love using my skills to build
              products that solve real problems and connect with users.
            </p>

            <p className="text-[#9CA3AF] text-lg leading-relaxed">
              As someone who values collaboration and staying on the cutting
              edge, I'm excited by opportunities to join a development team
              where I can share my skills and experience while continuing to
              evolve as a coder. Most of all, I want to build things that matter
              - things that have an impact.
            </p>
          </motion.div>

          <motion.h3
            variants={fadeInUp}
            className="text-[#D1D5DB] text-2xl font-semibold mt-4"
          >
            Some of my technical skills include:
          </motion.h3>

          <motion.div
            variants={fadeInUp}
            className="grid grid-cols-2 gap-8 sm:gap-12 md:gap-16 lg:gap-20 mt-2"
          >
            {skills.map((column, columnIndex) => (
              <div key={columnIndex} className="flex flex-col gap-4">
                {column.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3 group"
                  >
                    <span className="text-[#34D399] text-2xl">•</span>
                    <span className="text-[#9CA3AF] group-hover:text-[#34D399] transition-colors duration-300">
                      {skill}
                    </span>
                  </motion.div>
                ))}
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-1/2  pointer-events-none" />
    </motion.main>
  );
};

export default About;
