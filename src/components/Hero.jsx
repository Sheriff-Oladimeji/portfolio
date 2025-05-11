import { motion } from "framer-motion";

const Hero = () => {
  const resumeLink = "/Sheriff-Oladimeji.pdf";

  const fadeInUp = {
    initial: { y: 30, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <header className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      <div className="w-full max-w-[1200px] px-6 relative">
        <motion.div
          className="flex flex-col items-center gap-8 mx-auto text-center"
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
            className="text-[#34D399] text-xl font-medium tracking-wider inline-block"
          >
            Hi, my name is
          </motion.span>

          <motion.h1
            variants={fadeInUp}
            className="text-6xl md:text-8xl font-bold text-[#FFFFFF] leading-tight tracking-tight"
          >
            Sheriff Oladimeji
          </motion.h1>

          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-6xl font-semibold text-[#D1D5DB] mt-2"
          >
            Full-stack Engineer
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-[#9CA3AF] text-xl md:text-2xl max-w-3xl mx-auto mt-6 leading-relaxed"
          >
            I build sleek and performant web applications, transforming ideas
            into seamless user experiences.
          </motion.p>

          <motion.div variants={fadeInUp} className="mt-12">
            <a
              href={resumeLink}
              download
              className="group relative px-10 py-5 text-xl font-medium rounded-lg bg-[#34D399] text-[#FFFFFF] overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-[#34D399]/30"
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

export default Hero;
