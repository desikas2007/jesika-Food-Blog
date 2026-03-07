import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getPosts } from '../services/api';

function Home() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPosts()
      .then(data => { setPosts(data); setLoading(false); })
      .catch(() => setLoading(false));
  }, []);

  const featured = posts[0];
  const rest = posts.slice(1);

  return (
    <main>
      {/* HERO */}
      <section className="hero">
        <div className="hero-bg-image"></div>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <p className="hero-eyebrow">A food blog by Jesika</p>
          <h1 className="hero-title">
            Flavours worth <em>chasing.</em>
          </h1>
          <p className="hero-sub">
            Recipes, restaurant reviews and food stories from Pondicherry and beyond.
          </p>
          <div className="hero-btns">
            <Link to="/food" className="btn btn-primary">Browse Recipes</Link>
            <Link to="/restaurants" className="btn btn-ghost">Explore Restaurants</Link>
          </div>
          <div className="hero-subscribe">
            <p className="hero-subscribe-label">Join 100,000+ food lovers</p>
            <div className="hero-subscribe-row">
              <input type="email" placeholder="Email Address" className="hero-email-input" />
              <button className="btn btn-primary">Subscribe Now</button>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED */}
      {!loading && featured && (
        <section className="section">
          <div className="container">
            <p className="eyebrow">Latest Recipe</p>
            <div className="featured-card">
              <div className="featured-img">
                <img src={featured.image} alt={featured.title} />
                <span className="badge">{featured.category}</span>
              </div>
              <div className="featured-body">
                <span className="cuisine-tag">{featured.cuisine}</span>
                <h2 className="featured-title">{featured.title}</h2>
                <p className="featured-excerpt">{featured.excerpt}</p>
                <div className="meta-row">
                  <span>Prep: {featured.prepTime}</span>
                  <span>Cook: {featured.cookTime}</span>
                  <span>Rating: {featured.rating}</span>
                </div>
                <Link to={'/food/' + featured.slug} className="btn btn-primary">
                  Read Recipe
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* RECIPE GRID */}
      <section className="section section-alt">
        <div className="container">
          <p className="eyebrow">More Recipes</p>
          <h2 className="section-title">From the kitchen</h2>
          {loading ? (
            <div className="grid-3">
              <div className="skeleton"></div>
              <div className="skeleton"></div>
              <div className="skeleton"></div>
            </div>
          ) : (
            <div className="grid-3">
              {rest.map(post => (
                <Link key={post.id} to={'/food/' + post.slug} className="card">
                  <div className="card-img">
                    <img src={post.image} alt={post.title} />
                    <span className="badge">{post.category}</span>
                  </div>
                  <div className="card-body">
                    <span className="cuisine-tag">{post.cuisine}</span>
                    <h3 className="card-title">{post.title}</h3>
                    <p className="card-excerpt">{post.excerpt}</p>
                    <div className="card-footer">
                      <span>⭐ {post.rating}</span>
                      <span>{post.cookTime}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
          <div className="center-cta">
            <Link to="/food" className="btn btn-outline">View All Recipes</Link>
          </div>
        </div>
      </section>

      {/* BANNER */}
      <section className="banner">
        <div className="container banner-inner">
          <div>
            <h2>Hungry to explore Pondicherry?</h2>
            <p>I have been eating my way through the city so you do not have to guess.</p>
          </div>
          <Link to="/restaurants" className="btn btn-primary">See My Picks</Link>
        </div>
      </section>
    </main>
  );
}

export default Home;