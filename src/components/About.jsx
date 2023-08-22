/* eslint-disable react/no-unescaped-entities */
const About = () => {
  return (
    <main className="container text-gray" name="about">
      <div className="flex justify-between flex-col gap-12  md:flex-row items-center w-full">
        <div className="md:w-[70%] flex flex-col gap-3">
          <h1 className="text-4xl sm:text-5xl font-bold mb-2 text-bold">
            Me, Myself & I
          </h1>

          <p>
            Hello! My name is Sheriff Oladimeji and I am a frontend web
            developer with a passion for creating intuitive and aesthetically
            pleasing user experiences. I have 2 years of experience building and
            designing responsive, mobile-friendly websites and web applications.
          </p>
          <p>
            I am a curious person who loves building cool stuff using the latest
            web technologies and frameworks. I am detail-oriented, focused on
            writing clean, maintainable code. I employ a mobile-first approach
            and leverage modern CSS techniques to create fast, responsive site
            experiences.
          </p>
          <p>
            In my free time, I enjoy contributing to open source projects and
            expanding my skills. I am a quick learner who is always improving by
            learning new techniques and staying up to date on web development
            trends. I am seeking a role where I can apply my skills and grow as
            a developer.
          </p>
          <h3 className="font-semibold text-light text-xl">
            Some of my technical skills include:
          </h3>
          <div className="flex gap-12">
            <span>
              <p>
                <span className="text-green text-2xl">‣</span> React
              </p>
              <p>
                <span className="text-green text-2xl">‣</span> JavaScript (ES6+)
              </p>
              <p>
                <span className="text-green text-2xl">‣</span> Sass
              </p>
              <p>
                <span className="text-green text-2xl">‣</span> Node.js
              </p>
            </span>
            <span>
              <p>
                <span className="text-green text-2xl">‣</span> Git{" "}
              </p>
              <p>
                <span className="text-green text-2xl">‣</span> TypeScript
              </p>
              <p>
                <span className="text-green text-2xl">‣</span> Next.js
              </p>
              <p>
                <span className="text-green text-2xl">‣</span> Tailwind CSS
              </p>
            </span>
          </div>
        </div>
        <img src="/profile.jpg" alt="" className="md:w-[30%]" />
      </div>
    </main>
  );
};

export default About;
