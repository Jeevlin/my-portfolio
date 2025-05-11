function Skills() {
  const frontendSkills = [
    'HTML5', 'CSS3', 'JavaScript (ES6+)', 'React.js', 'Vite', 'Bootstrap'
  ];
  const backendSkills = [
    'Node.js', 'Express.js', 'MongoDB', 'Firebase'
  ];
  const tools = [
    'Git & GitHub', 'Postman', 'Netlify'
  ];

  const sectionStyle = {
    padding: '60px 20px',
    backgroundColor: '#f9f9f9',
    textAlign: 'center'
  };

  const skillBoxStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '15px',
    marginTop: '20px',
    marginBottom: '40px'
  };

  const cardStyle = {
    padding: '10px 20px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    backgroundColor: 'white',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
    minWidth: '120px'
  };

  return (
    <section id="skills" style={sectionStyle}>
      <h2>Skills</h2>

      <h3>Frontend</h3>
      <div style={skillBoxStyle}>
        {frontendSkills.map((skill, index) => (
          <div key={index} style={cardStyle}>{skill}</div>
        ))}
      </div>

      <h3>Backend</h3>
      <div style={skillBoxStyle}>
        {backendSkills.map((skill, index) => (
          <div key={index} style={cardStyle}>{skill}</div>
        ))}
      </div>

      <h3>Tools & Deployment</h3>
      <div style={skillBoxStyle}>
        {tools.map((skill, index) => (
          <div key={index} style={cardStyle}>{skill}</div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
