import AOS from "aos";
import "aos/dist/aos.css";
import projects from "../data/projects";
import { FiGithub } from "react-icons/fi";
import { LiaExternalLinkAltSolid } from "react-icons/lia";

AOS.init();

const Projects = () => {
  return (
    <div className="container mx-auto py-20" name="projects">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-bold">
        Some Things I’ve Built
      </h2>

      <main className="grid gap-16 sm:gap-10 md:grid-cols-2">
        {projects.map((project) => (
          <div
            key={project.id}
            className="relative group rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700"
            data-aos="fade-up"
          >
            <div className="w-full h-72 relative overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute inset-0 p-6 flex flex-col justify-between z-10 opacity-0 group-hover:opacity-100 transition-all duration-500 bg-black">
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">
                {project.title}
              </h2>
              <p className="text-sm text-gray-300 mb-6">{project.desc}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tool, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 rounded-full bg-gray-600 text-white text-xs font-semibold"
                  >
                    {tool}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                {project.github && (
                  <a
                    className="flex items-center gap-2 text-white bg-gradient-to-r from-green-400 to-blue-500 px-3 py-1 rounded-full text-sm font-semibold shadow-md hover:shadow-lg transition-shadow duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                    href={project.github}
                  >
                    <FiGithub size={20} />
                    <span>Code</span>
                  </a>
                )}
                <a
                  className="flex items-center gap-2 text-white bg-gradient-to-r from-green-400 to-blue-500 px-3 py-1 rounded-full text-sm font-semibold shadow-md hover:shadow-lg transition-shadow duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                  href={project.link}
                >
                  <LiaExternalLinkAltSolid size={20} />
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
