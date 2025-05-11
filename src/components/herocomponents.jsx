function HeroSection() {
  return (
    <section
      id="hero"
      style={{
        background: 'linear-gradient(135deg, #4a90e2, #6a11cb)',
        color: 'white',
        padding: '100px 20px',
        textAlign: 'center',
      }}
    >
      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        <p style={{ fontSize: '1.2rem', marginBottom: '10px' }}>Hi, I'm</p>
        <h1 style={{ fontSize: '3rem', margin: '0 0 10px' }}>Jeevlin Princess</h1>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '20px', fontWeight: 'normal' }}>
          Full Stack Developer | JavaScript & React Enthusiast
        </h2>
        <p style={{ fontSize: '1rem', lineHeight: '1.6', marginBottom: '30px' }}>
          Passionate about building fast, responsive, and user-focused web applications using modern technologies.
        </p>
        <a
          href="#projects"
          style={{
            backgroundColor: 'white',
            color: '#4a90e2',
            padding: '12px 24px',
            borderRadius: '6px',
            textDecoration: 'none',
            fontWeight: 'bold',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
            transition: 'background-color 0.3s ease',
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = 'purple')}
          onMouseOut={(e) => (e.target.style.backgroundColor = 'white')}
        >
          View My Work
        </a>
      </div>
    </section>
  );
}

export default HeroSection;
