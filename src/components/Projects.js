import React from "react";

const projectsData = {
  projects: {
    frontEnd: [
      {
        name: "Landing Page",
        image: "https://example.com/landing-page.jpg",
        link: "https://example.com/landing-page",
        frameworks: "frameworkse A"
      },
      {
        name: "E-commerce Frontend",
        image: "https://example.com/ecommerce.jpg",
        link: "https://example.com/ecommerce",
        frameworks: "frameworkse B"
      }
    ],
    backEnd: [
      {
        name: "API de Usuarios",
        image: "https://example.com/api.jpg",
        link: "https://example.com/api",
        frameworks: "frameworkse C"
      },
      {
        name: "Sistema de Gestión",
        image: "https://example.com/system.jpg",
        link: "https://example.com/system",
        frameworks: "frameworkse D"
      }
    ]
  }
};

function Projects() {
  const { frontEnd, backEnd } = projectsData.projects;

  return (
    <div>
      <h2>Proyectos Front-End</h2>
      <div>
        {frontEnd.map((project, index) => (
          <div key={index}>
            <h3>{project.name}</h3>
            <img src={project.image} alt={project.name} style={{ width: "200px" }} />
            <p>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                Ver Proyecto
              </a>
            </p>
            <p>frameworkse: {project.frameworks}</p>
          </div>
        ))}
      </div>

      <h2>Proyectos Back-End</h2>
      <div>
        {backEnd.map((project, index) => (
          <div key={index}>
            <h3>{project.name}</h3>
            <img src={project.image} alt={project.name} style={{ width: "200px" }} />
            <p>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                Ver Proyecto
              </a>
            </p>
            <p>frameworkse: {project.frameworks}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
