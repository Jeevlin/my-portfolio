function Navbar() {
  return (
    <nav style={{
      position: 'sticky',
      top: 0,
      backgroundColor: '#333', // Dark background for contrast
      color: 'white',
      padding: '15px 30px',
      borderBottom: '2px solid #444',
      zIndex: 1000,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    }}>
      <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
        <a href="#" style={{ color: 'white', textDecoration: 'none' }}>Jeevlin</a>
      </div>
      <div style={{
        display: 'flex',
        gap: '25px',
      }}>
        <a href="#about" style={linkStyle}>About</a>
        <a href="#projects" style={linkStyle}>Projects</a>
        <a href="#skills" style={linkStyle}>Skills</a>
        <a href="#contact" style={linkStyle}>Contact</a>
      </div>
    </nav>
  );
}

const linkStyle = {
  color: 'white',
  textDecoration: 'none',
  fontSize: '1rem',
  fontWeight: '500',
  transition: 'color 0.3s ease',
};

export default Navbar;
