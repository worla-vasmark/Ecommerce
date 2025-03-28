import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./common/Header";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Shop from "./pages/shop";
import Contact from "./pages/Contact";
import AboutUs from "./pages/AboutUs";
import Blog from "./pages/BLog";
import NotFoundPage from "./pages/NotFoundPage";
import Footer from "./common/Footer";

const App = () => {
  return (
    <div>
      <Router>
        <Header/>

        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/shop" element={<Shop/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/about" element={<AboutUs/>} />
          <Route path="/blog" element={<Blog/>} />
          <Route path="/*" element={<NotFoundPage/>} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  )
}

export default App