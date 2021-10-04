import Anuncios from "../../components/anuncios/Anuncios";
import Categories from "../../components/categories/Categories";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import Newsletter from "../../components/newsletter/Newsletter";
import Products from "../../components/products/Products";
import Slider from "../../components/slider/Slider";

const Home = () => {
  return (
    <div>
      <Anuncios />
      <Navbar />
      <Slider />
      <Categories />
      <Products />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;
