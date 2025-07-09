function Projects() {
  const projects = [
    {
      title: "Theatre Ticket App",
      description: "A full-featured theatre ticket booking system built using React and Firebase.",
      liveLink: "https://abctheatre.netlify.app/",
      codeLink: "https://github.com/Jeevlin/theatre-app"
    },
    {
      title: "Pet Store App ",
      description: "An e-commerce-style pet store app built with React for frontend and Node.js, Express.js, and Firebase for backend and admin management.",
      liveLink: "https://pet-store-app.netlify.app", 
      codeLink: "https://github.com/Jeevlin/petstore-admin-app" 
    },
      {
      title: "Pet Store App Admin Panel",
      description: "An e-commerce-style pet store app built with React for frontend and Node.js, Express.js, and Firebase for backend and admin management.",
      liveLink: "https://pet-store-app.netlify.app", 
      codeLink: "https://timely-semolina-057924.netlify.app" 
    },
    {
      title: "Academy Admin App",
      description: "A React + Firebase application to manage student admissions, batches, and fee records for an educational academy.",
      liveLink: "#", // Add link if deployed
      codeLink: "https://github.com/Jeevlin/academy-admin-app" // Replace with actual repo
    }
  ];

  return (
    <section id="projects" style={{ padding: '60px 20px', backgroundColor: '#f9f9f9' }}>
      <h2 style={{ textAlign: 'center' }}>Projects</h2>
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '20px',
        marginTop: '30px'
      }}>
        {projects.map((project, index) => (
          <div key={index} style={{
            width: '300px',
            padding: '20px',
            border: '1px solid #ddd',
            borderRadius: '10px',
            backgroundColor: 'white',
            boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
          }}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p>
              <a href={project.liveLink} target="_blank" rel="noreferrer">Live Demo</a> |{" "}
              <a href={project.codeLink} target="_blank" rel="noreferrer">Code</a>
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
