import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Navbar from "./Components/Navbar.jsx";
import HeroSection from "./Components/HeroSection.jsx";
import ProductGrid from "./Components/ProductGrid.jsx";
import WhychooseUS from "./Components/WhychooseUS.jsx";
import Testimonials from "./Components/Testimonials.jsx";
import LatestBlog from "./Components/LatestBlog.jsx";
import Newsletter from "./Components/Newsletter.jsx";
import Footer from "./Components/Footer.jsx";

createRoot(document.getElementById("root")).render(
  <>
    <Navbar />
    <HeroSection />
    <ProductGrid/>
    <WhychooseUS/>
    <Testimonials/>
    <LatestBlog/>
    <Newsletter/>
    <Footer/>
  </>
);
