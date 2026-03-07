import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setMenuOpen(false), [location]);

  return (
    <header className={scrolled ? 'navbar navbar-scrolled' : 'navbar'}>
      <div className="navbar-inner">
        <Link to="/" className="navbar-logo">
          <span className="logo-icon">✦</span>
          <span className="logo-name">Jesika</span>
          <span className="logo-sub">food blog</span>
        </Link>

        <nav className={menuOpen ? 'nav-links nav-links-open' : 'nav-links'}>
          {[['/', 'Home'], ['/food', 'Recipes'], ['/restaurants', 'Restaurants'], ['/contact', 'Contact']].map(([to, label]) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) => isActive ? 'nav-link nav-link-active' : 'nav-link'}
            >
              {label}
            </NavLink>
          ))}
        </nav>

        <button
          className={menuOpen ? 'burger burger-open' : 'burger'}
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Toggle menu"
        >
          <span></span><span></span><span></span>
        </button>
      </div>
    </header>
  );
}

export default Navbar;