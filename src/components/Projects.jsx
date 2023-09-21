import projects from "../data/projects";
import { FiGithub } from "react-icons/fi";
import { LiaExternalLinkAltSolid } from "react-icons/lia";
const Projects = () => {
  return (
    <div className="container flex flex-col gap-12 " name="projects">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 text-bold">
        Some Things I’ve Built
      </h2>

      <main className="grid md:grid-cols-2  gap-10">
        {projects.map((project) => (
          <div
            key={project.id}
            className="flex flex-col  items-center   shadow-xl py-6 bg-[#0b172b] rounded-md cursor-pointer  "
          >
            <div className="w-[90%] mx-auto flex flex-col gap-4">
              <h2 className="text-2xl md:text-3xl  font-semibold mb-2 text-bold hover:text-green">
                {project.title}
              </h2>
              <p className="text-gray">{project.desc}</p>
              <div className="text-white flex flex-wrap gap-6 items-center">
                {project.tech.map((tool, index) => (
                  <span key={index} className="button py-1 px-2">
                    {tool}
                  </span>
                ))}
              </div>
              <div className="flex gap-6 items-center mt-4">
                {project.github && (
                  <a
                    className="text-white hover:text-green flex gap-2 items-center"
                    target="_blank"
                    rel="noopener noreferrer"
                    href={project.github}
                  >
                    <FiGithub size={25} /> <span>Code</span>
                  </a>
                )}
                <a
                  className="text-white hover:text-green flex gap-2 items-center"
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
