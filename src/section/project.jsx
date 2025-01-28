import React from "react";

function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      description: "A personal portfolio showcasing my skills and projects.",
      tech: ["React", "Tailwind CSS", "Vite"],
      image: "/images/portfolio-thumbnail.jpg",
      demo: "https://your-portfolio.com", // Demo link exists
      github: "https://github.com/Wa1tonGan/Portfolio-website",
    },
    {
      title: "Inventory System",
      description: "A Java console application for managing inventory, including item addition, deletion, stock management, and more.",
      tech: ["Java"],
      image: "/images/ecommerce-thumbnail.jpg",
      demo: null, // No demo link
      github: "https://github.com/Cstan0824/Java-Assignment",
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
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
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
                {/* Project Title */}
                <h3 className="text-2xl font-semibold text-base-content">
                  {project.title}
                </h3>

                {/* Project Description */}
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
                  {/* Only show Live Demo if the demo link exists */}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                    >
                      Live Demo
                    </a>
                  )}
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
