import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Header() {
  const [open, setOpen] = useState(false);
  const closeMenu = () => setOpen(false);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link to="/" onClick={closeMenu} aria-label="Little Lemon home">
          <img className="brand-logo" src="/images/little-lemon-logo.png" alt="Little Lemon" />
        </Link>
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={open}
          aria-controls="primary-navigation"
          aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
          onClick={() => setOpen((value) => !value)}
        >
          <span aria-hidden="true">{open ? '×' : '☰'}</span>
        </button>
        <nav id="primary-navigation" className={open ? 'primary-nav is-open' : 'primary-nav'} aria-label="Primary navigation">
          <ul>
            <li><NavLink to="/" end onClick={closeMenu}>Home</NavLink></li>
            <li><a href="/#menu" onClick={closeMenu}>Menu</a></li>
            <li><a href="/#about" onClick={closeMenu}>About</a></li>
            <li><NavLink className="nav-book" to="/booking" onClick={closeMenu}>Reserve a table</NavLink></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
