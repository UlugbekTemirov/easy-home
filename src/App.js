import React, { Suspense, useEffect, lazy } from "react";

// react-router-dom
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// animation
import AOS from "aos";
import "aos/dist/aos.css";

// components
import Loader from "./components/Loader";
import Main from "./layout/Main";

function App() {
  const Home = lazy(() => import("./pages/Home"));
  const About = lazy(() => import("./pages/About"));
  const Contact = lazy(() => import("./pages/Contact"));
  const Services = lazy(() => import("./pages/Services"));
  const Products = lazy(() => import("./pages/Products"));
  const Product = lazy(() => import("./pages/Product"));
  const News = lazy(() => import("./pages/News"));
  const NotFound = lazy(() => import("./pages/NotFound"));

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Services />} />
            <Route path="/products" element={<Products />} />
            <Route path="/news" element={<News />} />
            <Route path="/products/:slug" element={<Product />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Main>
      </Suspense>
    </Router>
  );
}

export default App;
