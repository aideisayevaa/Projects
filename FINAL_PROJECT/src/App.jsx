import './App.css'
import { Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import SinglePage from './pages/SinglePage'
import About from './pages/About'
import NotFound404 from './pages/NotFound404'
import Contact from './pages/Contact'
import Basket from './pages/Basket'
import { connect } from 'react-redux'
import { useEffect } from 'react'
import Faqs from './pages/Faqs'
import Shop from './pages/Shop'
import ProductsByCategory from './pages/ProductsByCategory'
import Favorite from './pages/Favorite'
import { AnimatePresence } from "framer-motion";
function App({ dispatch, basket, favorite }) {

  const { pathname } = useLocation();
  const route = pathname.split("/")[1];
  const routes = ["", "single", "about", "contact", "faqs", "basket", "shop", "fav"];
  useEffect(() => {
    localStorage.setItem("basket", JSON.stringify(basket));
  }, [basket]);

  useEffect(() => {
    localStorage.setItem("favorite", JSON.stringify(favorite));
  }, [favorite]);

  useEffect(() => {
    fetch("db.json")
      .then((a) => a.json())
      .then((a) => {
        dispatch({
          type: "SET_PRODUCTS",
          payload: a.products,
        });
        dispatch({
          type: "SET_CATEGORIES",
          payload: a.categories,
        });
        dispatch({
          type: "SET_SUBCATEGORIES",
          payload: a.subcategories,
        });
      });
  }, []);
  return (
    <>
      {routes.includes(route) && <Header />}
      <AnimatePresence>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/basket" element={<Basket />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faqs" element={<Faqs />} />
          <Route path="/fav" element={<Favorite />} />

          <Route path="/single/:id" element={<SinglePage />} />
          {/* <Route path="/category/:category_name" element={<ForCategory2 />} /> */}
          <Route path="/:category/:subcategory_id" element={<ProductsByCategory />} />
          <Route path="/:sale" element={<ProductsByCategory />} />
          <Route path="*" element={<NotFound404 />} />
        </Routes>
      </AnimatePresence>
      {routes.includes(route) && <Footer />}
    </>

  )
}
const t = (a) => {
  return {
    basket: a.basket,
    favorite: a.favorite,
  };
};
export default connect(t)(App)