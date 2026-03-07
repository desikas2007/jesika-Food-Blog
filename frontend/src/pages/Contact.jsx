import { useState } from 'react';
import { sendContact } from '../services/api';

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState(null);

  const update = (field) => (e) => setForm(prev => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    try {
      await sendContact(form);
      setForm({ name: '', email: '', subject: '', message: '' });
      setStatus('success');
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <main className="page-wrap">
      <div className="page-hero page-hero-contact">
        <div className="container">
          <p className="eyebrow">Say Hello</p>
          <h1 className="page-hero-title">Contact</h1>
          <p className="page-hero-sub">Recipe questions, collab ideas, or just want to talk food?</p>
        </div>
      </div>

      <div className="container contact-body">
        <div className="contact-info">
          <h2>Let's connect</h2>
          <p>
            I love hearing from fellow food lovers. Whether you tried a recipe, want to recommend a spot,
            or are interested in working together — drop me a message.
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <span>📧</span>
              <span>desikas209@gmail.com</span>
            </div>
            <div className="contact-detail">
              <span>📍</span>
              <span>Karur, India</span>
            </div>
            <div className="contact-detail">
              <span>📱</span>
              <span>@Desikaeats on Instagram</span>
            </div>
          </div>
        </div>

        <div className="contact-form-wrap">
          {status === 'success' ? (
            <div className="contact-success">
              <span className="success-icon">✦</span>
              <h3>Message sent!</h3>
              <p>Thanks for reaching out. I will get back to you soon.</p>
              <button className="btn btn-outline" onClick={() => setStatus(null)}>
                Send another
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row-2">
                <div className="form-group">
                  <label>Name</label>
                  <input
                    type="text"
                    className="form-input"
                    placeholder="Your name"
                    value={form.name}
                    onChange={update('name')}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    className="form-input"
                    placeholder="desikas209@gmail.com"
                    value={form.email}
                    onChange={update('email')}
                    required
                  />
                </div>
              </div>
              <div className="form-group">
                <label>Subject</label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="What is this about?"
                  value={form.subject}
                  onChange={update('subject')}
                />
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea
                  className="form-textarea"
                  placeholder="Write your message here..."
                  value={form.message}
                  onChange={update('message')}
                  rows={6}
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary" disabled={status === 'loading'}>
                {status === 'loading' ? 'Sending...' : 'Send Message'}
              </button>
              {status === 'error' && (
                <p className="msg-error">Something went wrong. Please try again.</p>
              )}
            </form>
          )}
        </div>
      </div>
    </main>
  );
}

export default Contact;