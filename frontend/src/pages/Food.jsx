import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getPosts } from '../services/api';

const CATEGORIES = ['All', 'Breakfast', 'Mains', 'Desserts', 'Street Food'];

function Food() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState('All');
  const [search, setSearch] = useState('');

  useEffect(() => {
    setLoading(true);
    const filters = {};
    if (activeCategory !== 'All') filters.category = activeCategory;
    if (search) filters.search = search;
    getPosts(filters)
      .then(data => { setPosts(data); setLoading(false); })
      .catch(() => setLoading(false));
  }, [activeCategory, search]);

  return (
    <main className="page-wrap">
      <div className="page-hero page-hero-food">
        <div className="container">
          <p className="eyebrow">The Recipe Collection</p>
          <h1 className="page-hero-title">Food &amp; Recipes</h1>
          <p className="page-hero-sub">Dishes I have cooked, loved, and want you to try.</p>
        </div>
      </div>

      <div className="container">
        <div className="filters">
          <input
            className="search-input"
            placeholder="Search recipes..."
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
          <div className="filter-tabs">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                className={activeCategory === cat ? 'filter-tab filter-tab-active' : 'filter-tab'}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {loading ? (
          <div className="grid-3">
            <div className="skeleton"></div>
            <div className="skeleton"></div>
            <div className="skeleton"></div>
          </div>
        ) : posts.length === 0 ? (
          <div className="empty-state">
            <p>No recipes found. Try a different search.</p>
          </div>
        ) : (
          <div className="grid-3">
            {posts.map(post => (
              <Link key={post.id} to={'/food/' + post.slug} className="card">
                <div className="card-img">
                  <img src={post.image} alt={post.title} />
                  <span className="badge">{post.category}</span>
                </div>
                <div className="card-body">
                  <span className="cuisine-tag">{post.cuisine}</span>
                  <h3 className="card-title">{post.title}</h3>
                  <p className="card-excerpt">{post.excerpt}</p>
                  <div className="card-tags">
                    {post.tags.slice(0, 3).map(tag => (
                      <span key={tag} className="tag">#{tag}</span>
                    ))}
                  </div>
                  <div className="card-footer">
                    <span>⭐ {post.rating}</span>
                    <span>{post.cookTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}

export default Food;