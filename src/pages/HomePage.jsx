import { Link } from 'react-router-dom';
import MenuCard from '../components/MenuCard';

const dishes = [
  { image: '/images/greek-salad.jpg', name: 'Greek salad', description: 'Tomatoes, cucumber, olives and feta with a bright lemon dressing.', price: '$12' },
  { image: '/images/bruschetta.jpg', name: 'Bruschetta', description: 'Grilled bread topped with garlic, tomatoes and fresh basil.', price: '$8' },
  { image: '/images/lemon-dessert.jpg', name: 'Lemon dessert', description: 'A light citrus finish inspired by our family recipe.', price: '$7' },
];

export default function HomePage() {
  return (
    <main id="main-content">
      <section className="hero-section">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Chicago</p>
            <h1>Little Lemon</h1>
            <p className="hero-lead">Seasonal Mediterranean dishes, family recipes and a warm table waiting for you.</p>
            <Link className="button button-primary" to="/booking">Reserve a table</Link>
          </div>
          <img className="hero-photo" src="/images/restaurant-food.jpg" alt="A colourful Mediterranean dish served at Little Lemon" />
        </div>
      </section>

      <section id="menu" className="section container" aria-labelledby="menu-title">
        <div className="section-heading">
          <div><p className="eyebrow dark">Fresh this week</p><h2 id="menu-title">Our seasonal favourites</h2></div>
          <a className="text-link" href="#hours">View opening hours</a>
        </div>
        <div className="menu-grid">{dishes.map((dish) => <MenuCard key={dish.name} {...dish} />)}</div>
      </section>

      <section id="about" className="about-section">
        <div className="container about-grid">
          <div>
            <p className="eyebrow dark">Our story</p>
            <h2>Traditional recipes, served with a modern touch</h2>
            <p>Brothers Mario and Adrian founded Little Lemon after moving from Italy to Chicago. Their menu brings together the Italian, Greek and Turkish food they grew up loving.</p>
            <p>We cook with seasonal ingredients and make every guest feel at home.</p>
          </div>
          <img src="/images/lemon-mark.png" alt="Little Lemon illustrated lemon mark" />
        </div>
      </section>

      <section id="hours" className="section container visit-grid" aria-labelledby="visit-title">
        <div className="visit-card">
          <p className="eyebrow dark">Plan your visit</p>
          <h2 id="visit-title">Opening hours</h2>
          <dl><div><dt>Monday–Friday</dt><dd>12:00–22:00</dd></div><div><dt>Saturday–Sunday</dt><dd>17:00–23:00</dd></div></dl>
          <Link className="button button-secondary" to="/booking">Book your table</Link>
        </div>
        <img className="map-image" src="/images/chicago-map.png" alt="Map showing Little Lemon in Chicago" />
      </section>
    </main>
  );
}
