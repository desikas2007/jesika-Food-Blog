import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <div className="footer-logo">✦ Jesika</div>
          <p>A love letter to food — from kitchen experiments to Pondicherry's best tables.</p>
        </div>
        <div className="footer-nav">
          <h4>Explore</h4>
          <Link to="/food">Recipes</Link>
          <Link to="/restaurants">Restaurants</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div className="footer-social">
          <h4>Follow Along</h4>
          <a href="#top">Instagram</a>
          <a href="#top">Pinterest</a>
          <a href="#top">YouTube</a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Jesika's Food Blog. Made with love in Pondicherry.</p>
      </div>
    </footer>
  );
}

export default Footer;