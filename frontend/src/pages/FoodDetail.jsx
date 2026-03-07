import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getPost, addComment } from '../services/api';
import CommentSection from '../components/CommentSection';

function FoodDetail() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    getPost(slug)
      .then(data => { setPost(data); setLoading(false); })
      .catch(() => { setError('Recipe not found'); setLoading(false); });
  }, [slug]);

  const handleComment = async (payload) => {
    const newComment = await addComment(slug, payload);
    setPost(prev => ({ ...prev, comments: [...prev.comments, newComment] }));
  };

  if (loading) return (
    <div className="loading-screen">
      <div className="spinner"></div>
    </div>
  );

  if (error || !post) return (
    <div className="container error-page">
      <h2>{error}</h2>
      <Link to="/food" className="back-link">Back to Recipes</Link>
    </div>
  );

  return (
    <main>
      <div className="detail-hero" style={{ backgroundImage: 'url(' + post.image + ')' }}>
        <div className="detail-overlay">
          <div className="container">
            <Link to="/food" className="back-link">← All Recipes</Link>
            <span className="detail-meta-top">{post.category} · {post.cuisine}</span>
            <h1 className="detail-title">{post.title}</h1>
            <p className="detail-excerpt">{post.excerpt}</p>
            <div className="detail-stats">
              <div className="stat"><span className="stat-label">Prep</span><span>{post.prepTime}</span></div>
              <div className="stat"><span className="stat-label">Cook</span><span>{post.cookTime}</span></div>
              <div className="stat"><span className="stat-label">Serves</span><span>{post.servings}</span></div>
              <div className="stat"><span className="stat-label">Rating</span><span>⭐ {post.rating}</span></div>
            </div>
          </div>
        </div>
      </div>

      <div className="container detail-body">
        <div className="detail-main">
          <div className="detail-section">
            <h2>About this dish</h2>
            <p className="detail-text">{post.content}</p>
          </div>

          <div className="detail-section">
            <h2>Instructions</h2>
            <ol className="steps-list">
              {post.steps.map((step, i) => (
                <li key={i} className="step-item">
                  <span className="step-num">{i + 1}</span>
                  <p>{step}</p>
                </li>
              ))}
            </ol>
          </div>

          <div className="detail-section">
            <div className="tags-row">
              {post.tags.map(tag => <span key={tag} className="tag">#{tag}</span>)}
            </div>
          </div>

          <CommentSection
            comments={post.comments}
            onSubmit={handleComment}
            type="comment"
          />
        </div>

        <aside className="detail-sidebar">
          <div className="sidebar-card">
            <h3>Ingredients</h3>
            <ul className="ingredients-list">
              {post.ingredients.map((ing, i) => (
                <li key={i}><span className="dot">•</span>{ing}</li>
              ))}
            </ul>
          </div>
          <div className="sidebar-card sidebar-dark">
            <h3>Published</h3>
            <p>{post.date}</p>
            <h3 style={{ marginTop: '1rem' }}>Comments</h3>
            <p>{post.comments.length} responses</p>
          </div>
        </aside>
      </div>
    </main>
  );
}

export default FoodDetail;