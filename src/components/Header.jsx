import { motion } from "framer-motion";

const Header = () => {
  const resumeLink =
    "https://drive.google.com/uc?export=download&id=1sOMSlvFJPWfq8qfXh1JgFUVNDfnr98kc";

  const fadeInUp = {
    initial: { y: 30, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <header className="min-h-screen relative  overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      <div className="mx-auto px-6 pt-32 relative max-w-[1200px]">
        <motion.div
          className="flex flex-col items-center md:items-start gap-6 max-w-4xl"
          initial="initial"
          animate="animate"
          variants={{
            animate: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          <motion.span
            variants={fadeInUp}
            className="text-[#34D399] text-lg font-medium tracking-wider inline-block text-center md:text-left"
          >
            Hi, my name is
          </motion.span>

          <motion.h1
            variants={fadeInUp}
            className="text-5xl md:text-7xl font-bold text-[#FFFFFF] leading-tight tracking-tight text-center md:text-left"
          >
            Sheriff Oladimeji
          </motion.h1>

          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-6xl font-semibold text-[#D1D5DB] text-center md:text-left"
          >
            Full-stack Engineer
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-[#9CA3AF] text-lg md:text-xl text-center md:text-left max-w-2xl leading-relaxed"
          >
            I build sleek and performant web applications, transforming ideas
            into seamless user experiences.
          </motion.p>

          <motion.div variants={fadeInUp} className="flex gap-6 mt-4">
            <a
              href={resumeLink}
              download="Sheriff-Oladimeji-Resume.pdf"
              className="group relative px-8 py-4 text-lg font-medium rounded-lg bg-[#34D399] text-[#FFFFFF] overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-[#34D399]/30"
              target="_blank"
              rel="noreferrer"
            >
              <span className="relative z-10">View My Resume</span>
              <div className="absolute inset-0 bg-[#10B981] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </header>
  );
};

export default Header;
