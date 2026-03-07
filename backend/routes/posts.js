const express = require('express');
const router = express.Router();
const { posts } = require('../data/db');

router.get('/', (req, res) => {
  const { category, search } = req.query;
  let result = [...posts];
  if (category) result = result.filter(p => p.category.toLowerCase() === category.toLowerCase());
  if (search) result = result.filter(p =>
    p.title.toLowerCase().includes(search.toLowerCase()) ||
    p.tags.some(t => t.includes(search.toLowerCase()))
  );
  res.json(result);
});

router.get('/:slug', (req, res) => {
  const post = posts.find(p => p.slug === req.params.slug);
  if (!post) return res.status(404).json({ error: 'Post not found' });
  res.json(post);
});

router.post('/:slug/comments', (req, res) => {
  const post = posts.find(p => p.slug === req.params.slug);
  if (!post) return res.status(404).json({ error: 'Post not found' });
  const { author, text } = req.body;
  if (!author || !text) return res.status(400).json({ error: 'Author and text required' });
  const comment = { id: Date.now(), author, text, date: new Date().toISOString().split('T')[0] };
  post.comments.push(comment);
  res.status(201).json(comment);
});

module.exports = router;