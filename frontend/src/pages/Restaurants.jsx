import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getRestaurants } from '../services/api';

function Restaurants() {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');

  useEffect(() => {
    setLoading(true);
    const filters = search ? { search } : {};
    getRestaurants(filters)
      .then(data => { setRestaurants(data); setLoading(false); })
      .catch(() => setLoading(false));
  }, [search]);

  return (
    <main className="page-wrap">
      <div className="page-hero page-hero-restaurants">
        <div className="container">
          <p className="eyebrow">Eat Out</p>
          <h1 className="page-hero-title">Restaurants</h1>
          <p className="page-hero-sub">
            My favourite tables in Pondicherry — tried, tested, and honestly reviewed.
          </p>
        </div>
      </div>

      <div className="container">
        <div className="filters">
          <input
            className="search-input"
            placeholder="Search restaurants..."
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </div>

        {loading ? (
          <div className="grid-2">
            <div className="skeleton skeleton-tall"></div>
            <div className="skeleton skeleton-tall"></div>
          </div>
        ) : restaurants.length === 0 ? (
          <div className="empty-state"><p>No restaurants found.</p></div>
        ) : (
          <div className="grid-2">
            {restaurants.map(r => (
              <Link key={r.id} to={'/restaurants/' + r.slug} className="restaurant-card">
                <div className="card-img">
                  <img src={r.image} alt={r.name} />
                  <span className="price-badge">{r.priceRange}</span>
                </div>
                <div className="card-body">
                  <div className="rest-header">
                    <div>
                      <span className="cuisine-tag">{r.cuisine}</span>
                      <h3 className="card-title">{r.name}</h3>
                    </div>
                    <div className="rest-rating">
                      <span className="stars">{'★'.repeat(Math.floor(r.rating))}</span>
                      <span className="score">{r.rating}</span>
                    </div>
                  </div>
                  <p className="rest-address">📍 {r.address}</p>
                  <p className="card-excerpt">{r.description}</p>
                  <div className="card-tags">
                    {r.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
                  </div>
                  <p className="must-try-row">
                    <strong>Must try: </strong>
                    {r.mustTry.slice(0, 2).join(', ')}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}

export default Restaurants;