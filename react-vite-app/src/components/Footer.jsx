import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p>
          Portfolio React siswa dengan fitur CRUD pengalaman, routing, integrasi API, dan
          kesiapan deploy ke Vercel atau Netlify.
        </p>
        <p className="footer-links">
          <Link to="/">Home</Link>
          <Link to="/experience">Experience</Link>
          <Link to="/project">Project</Link>
          <Link to="/about">About</Link>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
