import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
import projects from "../data/projects";
import { FiGithub } from "react-icons/fi";
import { LiaExternalLinkAltSolid } from "react-icons/lia";
const Projects = () => {
  
  return (
    <div className="container flex flex-col gap-14 " name="projects">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 text-bold">
        Some Things I’ve Built
      </h2>

      <main className="grid md:grid-cols-2  gap-14">
        {projects.map((project) => (
          <div
            key={project.id}
            className="flex flex-col  items-center gap-4  shadow-xl pb-6 bg-[#0b172b] rounded-md cursor-pointer  "
            data-aos="zoom-in-up"
          >
            <img
              src={project.image}
              alt={project.title}
              className="rounded-t-md "
            />
            <div className="w-[90%] mx-auto flex flex-col gap-4">
              <h2 className="text-2xl md:text-3xl  font-semibold mb-2 text-bold hover:text-green">
                {project.title}
              </h2>
              <p className="text-gray">{project.desc}</p>
              <div className="text-white flex flex-wrap gap-4 sm:gap-6 md:gap-8 items-center">
                {project.tech.map((tool, index) => (
                  <span
                    key={index}
                    className=" rounded-full  outline-none  w-max font-medium text-center text-[#5ADFCB] py-1 px-2 bg-[#122B39] text-sm"
                  >
                    {tool}
                  </span>
                ))}
              </div>
              <div className="flex gap-6 items-center mt-4">
                {project.github && (
                  <a
                    className="text-green flex gap-2 items-center"
                    target="_blank"
                    rel="noopener noreferrer"
                    href={project.github}
                  >
                    <FiGithub size={25} /> <span>Code</span>
                  </a>
                )}
                <a
                  className="text-green flex gap-2 items-center "
                  target="_blank"
                  rel="noopener noreferrer"
                  href={project.link}
                >
                  <LiaExternalLinkAltSolid size={25} />
                  <span>Live Demo</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
};

export default Projects;
