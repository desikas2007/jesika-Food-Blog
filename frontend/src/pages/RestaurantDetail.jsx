import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getRestaurant, addReview } from '../services/api';
import CommentSection from '../components/CommentSection';

function RestaurantDetail() {
  const { slug } = useParams();
  const [restaurant, setRestaurant] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    getRestaurant(slug)
      .then(data => { setRestaurant(data); setLoading(false); })
      .catch(() => { setError('Restaurant not found'); setLoading(false); });
  }, [slug]);

  const handleReview = async (payload) => {
    const newReview = await addReview(slug, payload);
    setRestaurant(prev => ({ ...prev, reviews: [...prev.reviews, newReview] }));
  };

  if (loading) return (
    <div className="loading-screen">
      <div className="spinner"></div>
    </div>
  );

  if (error || !restaurant) return (
    <div className="container error-page">
      <h2>{error}</h2>
      <Link to="/restaurants" className="back-link">Back to Restaurants</Link>
    </div>
  );

  return (
    <main>
      <div className="detail-hero" style={{ backgroundImage: 'url(' + restaurant.image + ')' }}>
        <div className="detail-overlay">
          <div className="container">
            <Link to="/restaurants" className="back-link">← All Restaurants</Link>
            <span className="detail-meta-top">{restaurant.cuisine} · {restaurant.city}</span>
            <h1 className="detail-title">{restaurant.name}</h1>
            <div className="detail-stats">
              <div className="stat"><span className="stat-label">Rating</span><span>⭐ {restaurant.rating}</span></div>
              <div className="stat"><span className="stat-label">Price</span><span>{restaurant.priceRange}</span></div>
              <div className="stat"><span className="stat-label">Hours</span><span>{restaurant.openHours}</span></div>
              <div className="stat"><span className="stat-label">Phone</span><span>{restaurant.phone}</span></div>
            </div>
          </div>
        </div>
      </div>

      <div className="container detail-body">
        <div className="detail-main">
          <div className="detail-section">
            <h2>About</h2>
            <p className="detail-text">{restaurant.description}</p>
            <p className="detail-address">📍 {restaurant.address}</p>
          </div>
          <div className="detail-section">
            <div className="tags-row">
              {restaurant.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
            </div>
          </div>
          <CommentSection
            comments={restaurant.reviews}
            onSubmit={handleReview}
            type="review"
          />
        </div>

        <aside className="detail-sidebar">
          <div className="sidebar-card">
            <h3>Must Try</h3>
            <ul className="ingredients-list">
              {restaurant.mustTry.map((item, i) => (
                <li key={i}><span className="dot">✦</span>{item}</li>
              ))}
            </ul>
          </div>
          <div className="sidebar-card sidebar-dark">
            <h3>Info</h3>
            <p><strong>Address</strong><br />{restaurant.address}</p>
            <p style={{ marginTop: '0.75rem' }}><strong>Hours</strong><br />{restaurant.openHours}</p>
            <p style={{ marginTop: '0.75rem' }}><strong>Phone</strong><br />{restaurant.phone}</p>
          </div>
        </aside>
      </div>
    </main>
  );
}

export default RestaurantDetail;