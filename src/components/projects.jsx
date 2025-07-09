import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import './projects.css'; // Import the CSS file

function Projects() {
  const projects = [
    {
      title: "Theatre Ticket App",
      description:
        "A full-featured theatre ticket booking system built using React and Firebase.",
      liveLink: "https://abctheatre.netlify.app/",
      codeLink: "https://github.com/Jeevlin/theatre-app",
    },
    {
      title: "Pet Store App",
      description:
        "An e-commerce-style pet store app built with React, Node.js, Express.js, and Firebase.",
      liveLink: "https://pet-store-app.netlify.app",
      codeLink:
        "https://github.com/Jeevlin/my-pet-app/tree/main/petstore-frontend/vite-project",
    },
    {
      title: "Pet Store Admin Panel",
      description:
        "Admin panel for pet store with React frontend and Firebase backend.",
      liveLink: "https://timely-semolina-057924.netlify.app",
      codeLink:
        "https://github.com/Jeevlin/my-pet-app/tree/main/Admin-frontend/Pet%20store%20Admin",
    },
    {
      title: "Academy Admin App",
      description:
        "Manages admissions, batches, and fees using React and Firebase.",
      liveLink: "https://academy-adminpage.netlify.app",
      codeLink: "https://github.com/Jeevlin/academy-adminpage",
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">Projects</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <div className="project-links">
              <a href={project.liveLink} target="_blank" rel="noreferrer">
                <FaExternalLinkAlt /> Live Demo
              </a>
              <a href={project.codeLink} target="_blank" rel="noreferrer">
                <FaGithub /> Code
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
