import projects from "../data/projects";

const Projects = () => {
  return (
    <div
      className="container flex flex-col gap-12"
      name="projects"
    >
      <h2 className="text-4xl sm:text-5xl font-bold mb-2 text-bold">
        Some Things I’ve Built
      </h2>

      <main className="flex flex-col gap-12 w-full">
        {projects.map((project) => (
          <div
            key={project.id}
            className="flex flex-col md:flex-row gap-12 w-full"
          >
            <div className="flex-1 shadow-xl  w-full">
              <img
                src={project.image}
                alt={project.title}
                className="object-cover h-[400px]"
              />
            </div>

            <div className="w-full flex-1 h-[400px]">
              <h2 className="text-3xl sm:text-4xl font-semibold mb-2 text-bold">
                {project.title}
              </h2>
              <p>{project.desc}</p>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
};

export default Projects;
