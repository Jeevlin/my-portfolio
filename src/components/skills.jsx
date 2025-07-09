import html5 from '../assets/icons/html5.svg';
import css3 from '../assets/icons/css.svg';
import javascript from '../assets/icons/javascript.svg';
import react from '../assets/icons/react.svg';
import vite from '../assets/icons/vite.svg';
import bootstrap from '../assets/icons/bootstrap.svg';

import nodejs from '../assets/icons/nodejs.svg';
import express from '../assets/icons/express.svg';
import mongodb from '../assets/icons/mongodb.svg';
import firebase from '../assets/icons/firebase.svg';

import github from '../assets/icons/github.svg';
import postman from '../assets/icons/postman.svg';
import netlify from '../assets/icons/netlify.svg';

function Skills() {
  const frontendSkills = [
    { name: 'HTML5', icon: html5 },
    { name: 'CSS3', icon: css3 },
    { name: 'JavaScript (ES6+)', icon: javascript },
    { name: 'React.js', icon: react },
    { name: 'Vite', icon: vite },
    { name: 'Bootstrap', icon: bootstrap }
  ];

  const backendSkills = [
    { name: 'Node.js', icon: nodejs },
    { name: 'Express.js', icon: express },
    { name: 'MongoDB', icon: mongodb },
    { name: 'Firebase', icon: firebase }
  ];

  const tools = [
    { name: 'Git & GitHub', icon: github },
    { name: 'Postman', icon: postman },
    { name: 'Netlify', icon: netlify }
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
    minWidth: '140px',
    display: 'flex',
    alignItems: 'center',
    gap: '10px'
  };

  const iconStyle = {
    width: '24px',
    height: '24px'
  };

  const renderSkills = (skills) => (
    <div style={skillBoxStyle}>
      {skills.map((skill, index) => (
        <div key={index} style={cardStyle}>
          <img src={skill.icon} alt={skill.name} style={iconStyle} />
          <span>{skill.name}</span>
        </div>
      ))}
    </div>
  );

  return (
    <section id="skills" style={sectionStyle}>
      <h2>Skills</h2>

      <h3>Frontend</h3>
      {renderSkills(frontendSkills)}

      <h3>Backend</h3>
      {renderSkills(backendSkills)}

      <h3>Tools & Deployment</h3>
      {renderSkills(tools)}
    </section>
  );
}

export default Skills;
