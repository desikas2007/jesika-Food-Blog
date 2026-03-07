import { useState } from 'react';

function CommentSection({ comments, onSubmit, type }) {
  const [author, setAuthor] = useState('');
  const [text, setText] = useState('');
  const [rating, setRating] = useState(5);
  const [status, setStatus] = useState(null);
  const isReview = type === 'review';

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!author.trim() || !text.trim()) return;
    setStatus('loading');
    try {
      const payload = isReview ? { author, text, rating } : { author, text };
      await onSubmit(payload);
      setAuthor(''); setText(''); setRating(5);
      setStatus('success');
      setTimeout(() => setStatus(null), 3000);
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <div className="comments">
      <h3 className="comments-title">
        {isReview ? 'Reviews' : 'Comments'} ({(comments || []).length})
      </h3>

      <div className="comments-list">
        {(!comments || comments.length === 0) && (
          <p className="comments-empty">Be the first to {isReview ? 'review' : 'comment'}!</p>
        )}
        {(comments || []).map(c => (
          <div key={c.id} className="comment-card">
            <div className="comment-header">
              <div className="comment-avatar">{c.author[0].toUpperCase()}</div>
              <div className="comment-meta">
                <strong>{c.author}</strong>
                {isReview && (
                  <span className="comment-stars">
                    {'★'.repeat(c.rating)}{'☆'.repeat(5 - c.rating)}
                  </span>
                )}
                <span className="comment-date">{c.date}</span>
              </div>
            </div>
            <p className="comment-text">{c.text}</p>
          </div>
        ))}
      </div>

      <form className="comment-form" onSubmit={handleSubmit}>
        <h4>Leave a {isReview ? 'Review' : 'Comment'}</h4>
        <div className="form-row-2">
          <input
            className="form-input"
            placeholder="Your name"
            value={author}
            onChange={e => setAuthor(e.target.value)}
            required
          />
          {isReview && (
            <select
              className="form-input"
              value={rating}
              onChange={e => setRating(Number(e.target.value))}
            >
              {[5,4,3,2,1].map(n => <option key={n} value={n}>{n} Stars</option>)}
            </select>
          )}
        </div>
        <textarea
          className="form-textarea"
          placeholder="Share your thoughts..."
          value={text}
          onChange={e => setText(e.target.value)}
          rows={4}
          required
        />
        <button
          type="submit"
          className="btn btn-primary"
          disabled={status === 'loading'}
        >
          {status === 'loading' ? 'Posting...' : 'Post ' + (isReview ? 'Review' : 'Comment')}
        </button>
        {status === 'success' && <p className="msg-success">Posted successfully!</p>}
        {status === 'error'   && <p className="msg-error">Something went wrong. Try again.</p>}
      </form>
    </div>
  );
}

export default CommentSection;