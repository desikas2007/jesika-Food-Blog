import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Food from './pages/Food';
import FoodDetail from './pages/FoodDetail';
import Restaurants from './pages/Restaurants';
import RestaurantDetail from './pages/RestaurantDetail';
import Contact from './pages/Contact';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/"                  element={<Home />} />
        <Route path="/food"              element={<Food />} />
        <Route path="/food/:slug"        element={<FoodDetail />} />
        <Route path="/restaurants"       element={<Restaurants />} />
        <Route path="/restaurants/:slug" element={<RestaurantDetail />} />
        <Route path="/contact"           element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;