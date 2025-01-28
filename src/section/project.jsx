import React from "react";

function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      description: "A personal portfolio showcasing my skills and projects.",
      tech: ["React", "Tailwind CSS", "Vite"],
      image: "/images/portfolio-thumbnail.jpg",
      demo: "https://your-portfolio.com",
      github: "https://github.com/yourusername/portfolio",
    },
    {
      title: "E-Commerce App",
      description: "A full-stack e-commerce platform with user authentication.",
      tech: ["Next.js", "Node.js", "MongoDB"],
      image: "/images/ecommerce-thumbnail.jpg",
      demo: "https://ecommerce-app.com",
      github: "https://github.com/yourusername/ecommerce",
    },
    {
      title: "Task Manager",
      description: "A task management app with drag-and-drop functionality.",
      tech: ["React", "Firebase", "Tailwind CSS"],
      image: "/images/task-manager-thumbnail.jpg",
      demo: "https://taskmanager.com",
      github: "https://github.com/yourusername/task-manager",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-base-100">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <h2 className="text-4xl font-bold text-center text-primary mb-12">
          Projects
        </h2>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-base-200 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              {/* Thumbnail */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />

              {/* Project Details */}
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-base-content">
                  {project.title}
                </h3>
                <p className="mt-2 text-base-content/80">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="mt-6 flex gap-4">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;