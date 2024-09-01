import AOS from "aos";
import "aos/dist/aos.css";
import projects from "../data/projects";
import { FiGithub } from "react-icons/fi";
import { LiaExternalLinkAltSolid } from "react-icons/lia";

AOS.init();

const Projects = () => {
  return (
    <div className="container mx-auto py-20 px-4" name="projects">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 text-center">
        Some Things I've Built
      </h2>

      <div className="space-y-24">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className={`flex flex-col ${
              index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
            } items-center gap-6 lg:gap-12`}
            data-aos="fade-up"
          >
            <div className="w-full lg:w-1/2">
              <div className="relative group overflow-hidden rounded-lg shadow-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex gap-4">
                    {project.github && (
                      <a
                        className="text-white bg-gray-800 p-3 rounded-full hover:bg-gray-700 transition-colors duration-300"
                        target="_blank"
                        rel="noopener noreferrer"
                        href={project.github}
                      >
                        <FiGithub size={24} />
                      </a>
                    )}
                    <a
                      className="text-white bg-gray-800 p-3 rounded-full hover:bg-gray-700 transition-colors duration-300"
                      target="_blank"
                      rel="noopener noreferrer"
                      href={project.link}
                    >
                      <LiaExternalLinkAltSolid size={24} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                {project.desc}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tool, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-sm font-medium"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
