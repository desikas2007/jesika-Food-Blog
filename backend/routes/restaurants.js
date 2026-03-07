const express = require('express');
const router = express.Router();
const { restaurants } = require('../data/db');

router.get('/', (req, res) => {
  const { search } = req.query;
  let result = [...restaurants];
  if (search) result = result.filter(r =>
    r.name.toLowerCase().includes(search.toLowerCase()) ||
    r.cuisine.toLowerCase().includes(search.toLowerCase()) ||
    r.tags.some(t => t.includes(search.toLowerCase()))
  );
  res.json(result);
});

router.get('/:slug', (req, res) => {
  const restaurant = restaurants.find(r => r.slug === req.params.slug);
  if (!restaurant) return res.status(404).json({ error: 'Restaurant not found' });
  res.json(restaurant);
});

router.post('/:slug/reviews', (req, res) => {
  const restaurant = restaurants.find(r => r.slug === req.params.slug);
  if (!restaurant) return res.status(404).json({ error: 'Restaurant not found' });
  const { author, rating, text } = req.body;
  if (!author || !text || !rating) return res.status(400).json({ error: 'All fields required' });
  const review = { id: Date.now(), author, rating: Number(rating), text, date: new Date().toISOString().split('T')[0] };
  restaurant.reviews.push(review);
  res.status(201).json(review);
});

module.exports = router;