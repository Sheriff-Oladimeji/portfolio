/* eslint-disable react/no-unescaped-entities */
const About = () => {
  return (
    <main className="container text-gray" name="about">
      <div className="flex justify-between flex-col gap-16  md:flex-row items-center w-full">
        <div className="md:w-[100%] flex flex-col gap-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 text-bold ">
            Me, Myself &amp; I
          </h1>
          <p className="max-w-3xl">
            {" "}
            I'm Sheriff Oladimeji, a curious full-stack developer with a passion
            for creating intuitive digital experiences. Though my expertise
            centers around frontend development, I enjoy
            working across the entire stack to bring ideas to life.
          </p>{" "}
          <p className="max-w-3xl">
            {" "}
            I first started coding out of fascination with hacking and a desire
            to understand the inner workings of computers and systems. What
            began as a hobby fueled by curiosity has grown into a craft I am
            deeply passionate about. I love using my skills to build products
            that solve real problems and connect with users.{" "}
          </p>{" "}
          
          <p className="max-w-3xl">
            {" "}
            As someone who values collaboration and staying on the cutting edge,
            I'm excited by opportunities to join a development team where I can
            share my skills and experience while continuing to evolve as a
            coder. Most of all, I want to build things that matter - things that
            have an impact.{" "}
          </p>
          <h3 className="font-semibold text-light text-xl">
            Some of my technical skills include:
          </h3>
          <div className="flex gap-8 sm:gap-12 md:gap-16 lg:gap-20">
            <span>
              <p className="flex items-center gap-2">
                <span className="text-green text-3xl">•</span> React
              </p>
              <p className="flex items-center gap-2">
                <span className="text-green text-3xl">•</span> JavaScript (ES6+)
              </p>

              <p className="flex items-center gap-2">
                <span className="text-green text-3xl">•</span> Python
              </p>
              <p className="flex items-center gap-2">
                <span className="text-green text-3xl">•</span> MongoDB
              </p>
            </span>
            <span>
              <p className="flex items-center gap-2">
                <span className="text-green text-3xl">•</span> Git &amp; GitHub
              </p>
              <p className="flex items-center gap-2">
                <span className="text-green text-3xl">•</span> TypeScript
              </p>
              <p className="flex items-center gap-2">
                <span className="text-green text-3xl">•</span> Next.js
              </p>
              <p className="flex items-center gap-2">
                <span className="text-green text-3xl">•</span> Redux/Zustand
              </p>
            </span>
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;
