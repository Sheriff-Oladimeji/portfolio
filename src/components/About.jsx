/* eslint-disable react/no-unescaped-entities */
const About = () => {
  return (
    <main className="container text-gray" name="about">
      <div className="flex justify-between flex-col gap-16  md:flex-row items-center w-full">
        <div className="md:w-[100%] flex flex-col gap-3">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 text-bold ">
            Me, Myself & I
          </h1>

          <p className="max-w-4xl">
            Hello! My name is Sheriff Oladimeji and I am a frontend web
            developer with a passion for creating intuitive and aesthetically
            pleasing user experiences. I have over 1 year of experience building
            and designing responsive, mobile-friendly websites and web
            applications.
          </p>
          <p className="max-w-4xl">
            I am a curious person who loves building cool stuff using the latest
            web technologies and frameworks. I am detail-oriented, focused on
            writing clean, maintainable code. I employ a mobile-first approach
            and leverage modern CSS techniques to create fast, responsive site
            experiences.
          </p>
          <p className="max-w-4xl">
            In my free time, I enjoy contributing to open source projects and
            expanding my skills. I am a quick learner who is always improving by
            learning new technologies and staying up to date on web development
            trends. I am seeking a role where I can apply my skills and grow as
            a developer.
          </p>
          <h3 className="font-semibold text-light text-xl">
            Some of my technical skills include:
          </h3>
          <div className="flex gap-12">
            <span>
              <p className="flex items-center gap-2">
                <span className="text-green text-3xl">•</span> React
              </p>
              <p className="flex items-center gap-2">
                <span className="text-green text-3xl">•</span> JavaScript (ES6+)
              </p>

              <p className="flex items-center gap-2">
                <span className="text-green text-3xl">•</span> Node.js
              </p>
            </span>
            <span>
              <p className="flex items-center gap-2">
                <span className="text-green text-3xl">•</span> Git{" "}
              </p>
              <p className="flex items-center gap-2">
                <span className="text-green text-3xl">•</span> TypeScript
              </p>
              <p className="flex items-center gap-2">
                <span className="text-green text-3xl">•</span> Next.js
              </p>
            </span>
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;
