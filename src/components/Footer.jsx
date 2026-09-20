import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <img className="footer-mark" src="/images/lemon-mark.png" alt="" />
          <p className="footer-title">Little Lemon</p>
          <p>Family-owned Mediterranean food in Chicago.</p>
        </div>
        <div>
          <h2>Visit</h2>
          <address>123 Lemon Street<br />Chicago, IL</address>
        </div>
        <div>
          <h2>Opening hours</h2>
          <p>Mon–Fri: 12:00–22:00<br />Sat–Sun: 17:00–23:00</p>
        </div>
        <div>
          <h2>Quick links</h2>
          <p><Link to="/booking">Reserve a table</Link><br /><a href="mailto:hello@littlelemon.example">Email us</a></p>
        </div>
      </div>
      <p className="copyright">© 2026 Little Lemon. Course capstone project.</p>
    </footer>
  );
}
