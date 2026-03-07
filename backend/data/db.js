const posts = [
  {
    id: 1, title: "Mango Sticky Rice", slug: "mango-sticky-rice",
    category: "Desserts", cuisine: "Thai",
    image: "https://images.unsplash.com/photo-1569050467447-ce54b3bbc37d?w=800",
    excerpt: "A fragrant, golden dessert that melts on your tongue.",
    content: "Mango sticky rice is a beloved Thai dessert made with glutinous rice, fresh mango slices, and sweet coconut milk sauce. The rice is soaked overnight, steamed to perfection, and then bathed in a luscious coconut cream mixture.",
    prepTime: "20 min", cookTime: "30 min", servings: 4, rating: 4.9,
    tags: ["thai","dessert","mango","coconut"],
    ingredients: ["2 cups glutinous rice","2 ripe mangoes","1.5 cups coconut milk","4 tbsp sugar","1 tsp salt","sesame seeds"],
    steps: ["Soak rice overnight then steam for 25 minutes.","Heat coconut milk with sugar and salt until dissolved.","Mix half the coconut sauce into warm rice.","Slice mangoes and arrange on plates beside the rice.","Drizzle remaining coconut sauce over everything.","Garnish with toasted sesame seeds and serve warm."],
    comments: [{ id: 1, author: "Priya", text: "Made this last night — absolutely divine!", date: "2025-01-10" }],
    date: "2025-01-08"
  },
  {
    id: 2, title: "Shakshuka", slug: "shakshuka",
    category: "Breakfast", cuisine: "Middle Eastern",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800",
    excerpt: "Eggs poached in a smoky, spiced tomato sauce.",
    content: "Shakshuka is a North African and Middle Eastern breakfast staple. Eggs gently poached in a rich, spiced tomato and pepper sauce. Bold, warming, and ready in under 30 minutes.",
    prepTime: "10 min", cookTime: "20 min", servings: 2, rating: 4.8,
    tags: ["eggs","breakfast","spicy","one-pan"],
    ingredients: ["4 eggs","1 can crushed tomatoes","1 red bell pepper","1 onion","3 garlic cloves","1 tsp cumin","1 tsp paprika","fresh parsley"],
    steps: ["Saute onion and pepper in olive oil until soft.","Add garlic, cumin, and paprika — cook 1 minute.","Pour in crushed tomatoes and simmer for 10 minutes.","Make 4 wells in the sauce and crack in eggs.","Cover and cook until egg whites are just set.","Top with fresh parsley and serve with crusty bread."],
    comments: [{ id: 1, author: "Amira", text: "This is my Sunday morning ritual now!", date: "2025-02-03" }],
    date: "2025-01-22"
  },
  {
    id: 3, title: "Truffle Mushroom Risotto", slug: "truffle-mushroom-risotto",
    category: "Mains", cuisine: "Italian",
    image: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=800",
    excerpt: "Silky, luxurious risotto with earthy truffle notes.",
    content: "This risotto is restaurant-worthy and made right in your kitchen. Arborio rice slowly coaxed into creamy perfection with wild mushrooms and a drizzle of truffle oil.",
    prepTime: "15 min", cookTime: "35 min", servings: 4, rating: 4.7,
    tags: ["italian","risotto","truffle","mushroom"],
    ingredients: ["2 cups arborio rice","500g mixed mushrooms","1L warm stock","1 onion","4 garlic cloves","half cup white wine","truffle oil","parmesan","butter"],
    steps: ["Saute onion and garlic in butter until translucent.","Add arborio rice and toast for 2 minutes.","Pour in white wine and stir until fully absorbed.","Add warm stock one ladle at a time stirring constantly.","Stir in sauteed mushrooms and grated parmesan.","Finish with a drizzle of truffle oil and serve immediately."],
    comments: [],
    date: "2025-02-14"
  },
  {
    id: 4, title: "Tacos al Pastor", slug: "tacos-al-pastor",
    category: "Street Food", cuisine: "Mexican",
    image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=800",
    excerpt: "Marinated pork tacos with pineapple and cilantro.",
    content: "Al pastor is the crown jewel of Mexican street food. Pork shoulder marinated in dried chiles and achiote, cooked until gloriously caramelised, served in warm corn tortillas.",
    prepTime: "30 min", cookTime: "25 min", servings: 6, rating: 4.9,
    tags: ["mexican","tacos","pork","street food"],
    ingredients: ["1kg pork shoulder","4 dried guajillo chiles","achiote paste","pineapple chunks","corn tortillas","cilantro","white onion","lime"],
    steps: ["Blend dried chiles, achiote, and spices into a marinade.","Coat pork slices and marinate for at least 4 hours.","Cook pork in a hot cast iron pan until charred.","Chop pork and warm corn tortillas on a dry pan.","Build tacos with pork and fresh pineapple chunks.","Top with chopped onion, cilantro, and a squeeze of lime."],
    comments: [{ id: 1, author: "Marco", text: "These taste just like Mexico City!", date: "2025-03-01" }],
    date: "2025-03-01"
  }
];

const restaurants = [
  {
    id: 1, name: "Lemon & Fig", slug: "lemon-and-fig",
    cuisine: "Mediterranean", city: "Pondicherry",
    address: "12 Rue Suffren, White Town",
    rating: 4.8, priceRange: "Rs.Rs.Rs.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800",
    description: "A beautifully curated Mediterranean bistro tucked inside White Town. Fresh hummus, grilled octopus, and a wine list that genuinely surprises.",
    mustTry: ["Grilled Halloumi","Lamb Kofta","Fig & Honey Tart"],
    openHours: "12pm - 11pm", phone: "+91 413 222 1234",
    tags: ["romantic","outdoor seating","wine bar"],
    reviews: [{ id: 1, author: "Nadia", rating: 5, text: "The octopus was exceptional. Will definitely be back.", date: "2025-01-20" }]
  },
  {
    id: 2, name: "Maison Perumal", slug: "maison-perumal",
    cuisine: "French-Creole", city: "Pondicherry",
    address: "44 Perumal Kovil Street",
    rating: 4.7, priceRange: "Rs.Rs.Rs.Rs.",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800",
    description: "Heritage hotel dining in a restored 1930s mansion. The French-Creole fusion menu is a love letter to Pondicherry colonial past.",
    mustTry: ["Creole Fish Curry","Creme Brulee","Tarte Tatin"],
    openHours: "7pm - 10:30pm", phone: "+91 413 222 5678",
    tags: ["heritage","fine dining","colonial"],
    reviews: [{ id: 1, author: "Camille", rating: 5, text: "The atmosphere alone is worth every rupee.", date: "2025-01-30" }]
  },
  {
    id: 3, name: "Cafe des Arts", slug: "cafe-des-arts",
    cuisine: "French Cafe", city: "Pondicherry",
    address: "10 Suffren Street",
    rating: 4.5, priceRange: "Rs.Rs.",
    image: "https://images.unsplash.com/photo-1445116572660-236099ec97a0?w=800",
    description: "A charming courtyard cafe with rotating art exhibitions. Perfect for a lazy brunch with outstanding almond croissants.",
    mustTry: ["Almond Croissant","Eggs Benedict","Cafe au Lait"],
    openHours: "8am - 6pm", phone: "+91 413 222 9999",
    tags: ["brunch","art","courtyard","casual"],
    reviews: [{ id: 1, author: "Elise", rating: 4, text: "Lovely space, croissants are outstanding.", date: "2025-02-15" }]
  },
  {
    id: 4, name: "Palki", slug: "palki",
    cuisine: "North Indian", city: "Pondicherry",
    address: "Mission Street, New Town",
    rating: 4.6, priceRange: "Rs.Rs.",
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800",
    description: "Soul-warming North Indian curries and tandoor specialties loved by locals and visitors alike.",
    mustTry: ["Dal Makhani","Butter Chicken","Garlic Naan"],
    openHours: "11am - 11pm", phone: "+91 413 222 4567",
    tags: ["family friendly","vegetarian options","local favourite"],
    reviews: [{ id: 1, author: "Sunita", rating: 5, text: "Dal makhani here genuinely changed my life!", date: "2025-01-05" }]
  }
];

module.exports = { posts, restaurants };